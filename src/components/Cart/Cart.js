import React, { Component } from 'react';
import { Col, Row, Container, Form, FormGroup, Input } from 'reactstrap';
import PointBalance from "../MyAccount/PointBalance/PointBalance";
import { withRouter, Link } from 'react-router-dom';
import * as actionCreators from '../../actions/index.js';
import { connect } from "react-redux";
import Modal from 'react-responsive-modal';
import _ from 'underscore';
import './Cart.scss'
import tick from './completeOrder.png'
import Joi from 'joi-browser';

class Cart extends Component {
    state = {
        userCart: { "Order": {}, "OrderItems": [] },
        totalPoints: 0,
        changingInfo: false,
        errors: [],
        Order:{
            name:'',
            city:'',
            state:'',
            address:'',
            phoneNumber:'',
            userId:'',
            points:0
        },
        pointsValid:false,
        modalBuyPoints:false
    }


    schema = {
        name: Joi.string().required().label('Name'),
        phoneNumber: Joi.string().required().label('Phone Number'),
        city: Joi.string().required().label('City'),
        userId: Joi.string().allow('', null),
        points: Joi.number().integer().allow('', null),
        address: Joi.string().required().label('Address'),
        state: Joi.string().required().label('State')
    };

    componentDidMount() {

        let Order = {...this.state.Order};
        if (this.props.cart.Order === null) {
            
            Order.name = this.props.userAccount.name       
            Order.address = this.props.userAccount.address
            Order.phoneNumber = this.props.userAccount.mobile
        }else{
            Order = {...this.props.cart.Order}
        }
        Order.userId = this.props.userAccount.Id;
        
        let userCart = { ...this.state.userCart };
        
        userCart = this.props.cart;

        // let userCartItems = [];
        // userCartItems = userCart.OrderItems.filter

        userCart.OrderItems = _.sortBy(userCart.OrderItems, "name");

        this.setState({ userCart , Order });

        let totalPoints = this.state.totalPoints;

        this.props.cart.OrderItems.forEach(item => {
            totalPoints = totalPoints + parseInt(item.points);
        });

        let pointsValid = this.state.pointsValid;
        let balance = this.props.userAccount.balance;
        if (balance >= totalPoints) {
            pointsValid=true
        }else{
            pointsValid=false
        }

        this.setState({ totalPoints, pointsValid });
    }

    componentWillReceiveProps(nextProps) {
        let userCart = { ...this.state.userCart };
        userCart = nextProps.cart;

        let totalPoints = 0;

        nextProps.cart.OrderItems.forEach(item => {
            totalPoints = totalPoints + parseInt(item.points);
        });

        this.setState({ userCart, totalPoints });
    }

    toggleBuyPoints = () => {
        this.setState(prevState => ({ modalBuyPoints: !(prevState.modalBuyPoints) }));
      };


    handleQuantityChange = async (SKU, e) => {

        let inputValue = 1;

        if (e.target.value == null || e.target.value <=0 ) {
            inputValue = 1
        } else {
            inputValue = e.target.value;
        }

        let singleItem = { ...this.state.userCart };

        let foundProduct = singleItem.OrderItems.find(o => o.SKU === SKU);

        let filteredProducts = singleItem.OrderItems.filter(o => o.SKU !== SKU);

        let selectedProductPoints = this.props.originalProducts.find(p => p.SKU === SKU);

        let updatedPoints = parseInt(selectedProductPoints.points) * parseInt(inputValue);

        foundProduct.points = updatedPoints;
        foundProduct.amount = inputValue;

        let newArray = singleItem.OrderItems.find(o => o.SKU === foundProduct.SKU);
        let updateRow = [];
        updateRow.push(newArray);

        singleItem.OrderItems = [...updateRow, ...filteredProducts];

        let sorted = _.sortBy(singleItem.OrderItems, 'name');
        singleItem.OrderItems = sorted;
        await this.props.updateCart(singleItem);

        let pointsValid = this.state.pointsValid;
        let balance = this.props.userAccount.balance;
        if (balance >= this.state.totalPoints) {
            pointsValid=true
        }else{
            pointsValid=false
        }

        this.setState({ pointsValid });
    }

    handleDelete = async (SKU) => {
        let singleItem = { ...this.props.cart };
        let filteredProducts = singleItem.OrderItems.filter(o => o.SKU !== SKU);
        singleItem.OrderItems = filteredProducts;
        await this.props.updateCart(singleItem);

        let pointsValid = this.state.pointsValid;
        let balance = this.props.userAccount.balance;
        if (balance >= this.state.totalPoints) {
            pointsValid=true
        }else{
            pointsValid=false
        }

        this.setState({ pointsValid });

    }
    validateProperty(input) {
        const obj = { [input.name]: input.value };
        const schema = { [input.name]: this.schema[input.name] };
        const { error } = Joi.validate(obj, schema);
        if (!error) return null;
        return error.details[0].message;
      }
    
      /* *********************************************** HANDLE INPUT CHANGE EVENT *************************************** */
    
      validate = () => {
        const result = Joi.validate(this.state.Order, this.schema, {
          abortEarly: false
        });
        if (!result.error) return null;
    
        const errors = [];
    
        for (let item of result.error.details) errors[item.path[0]] = item.message;
        return errors;
      };



    handleChange = ({currentTarget:input}) => {
        const errors = [...this.state.errors];
    
        const errorMessage = this.validateProperty(input);

        if (errorMessage) 
        errors[input.name] = errorMessage;
        else 
        delete errors[input.name];

        let Order = {...this.state.Order};
        
        Order[input.name] = input.value;
        
        this.setState({Order, errors});
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        let completeOrder = {};
        completeOrder.Order = { ...this.props.cart.Order };
        completeOrder.Order.points = this.state.totalPoints;
        let products = [...this.props.cart.OrderItems];


        let OrderItems = [];
        _.forEach(products, item => {
            let orderItem = {
                quantity: 1,
                price: 0,
                productSKU: ''
            }
            orderItem.quantity = item.amount <= 0 ? 1 : parseInt(item.amount);
            orderItem.price = item.points;
            orderItem.productSKU = item.SKU;

            OrderItems.push(orderItem);
        })

        completeOrder.OrderItems = OrderItems;

        this.props.createOrder(completeOrder);
    }

    handleChangeCard = () => {
        this.setState({ changingInfo: true })
    }

    handleUpdateInfo =async e => {
        e.preventDefault();


        const errors = this.validate();

        this.setState({ errors: errors || {} });

        if (!errors) {
            
            let cart = {...this.props.cart};
            cart.Order = this.state.Order;
                
           await this.props.updateCart(cart);

        this.setState({changingInfo:false});
        }

    }

    handleCancelInfo =async e => {
        e.preventDefault();

        this.setState({changingInfo:false});
    }



    render() {

        return (
            <section className="cart-parent-wrapper">
                <Container>
                    <PointBalance />
                    <div style={{ clear: 'both' }}></div>
                    <div className="cart-child-wrapper">
                        <Row className="shopping-header-row">
                            <Col>
                                <h4>Shopping Cart({this.state.userCart.OrderItems.length} items)</h4>
                            </Col>
                        </Row>
                        <Row className="shopping-table-row">
                            <table width="100%">
                                <tr>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                                {
                                    this.state.userCart.OrderItems.length < 1 ? "No items in the cart" :
                                        this.state.userCart.OrderItems.map(item => (

                                            <tr key={item.SKU}>
                                                <td  style={{width:'40%'}} className="cartListImages"> 
                                                    <img src={`./images/products/${item.image}`}  className="img img-responsive img-thumbnail" alt="" />
                                                    <p className="d-none d-sm-block">{item.name}</p>
                                                </td>
                                                <td>
                                                    <Input type="number" name="number" style={{width:'85px'}} value={item.amount > 0 ? item.amount : 1} onChange={(e) => this.handleQuantityChange(item.SKU, e)} id="exampleSelect">
                                                    </Input>
                                                </td>
                                                <td>{item.points}pts</td>
                                                <td><i style={{ cursor: 'pointer',color:'#d0021b' }} onClick={() => this.handleDelete(item.SKU)} className="fas fa-trash-alt"></i></td>
                                            </tr>
                                        ))
                                }
                                
                            </table>
                        </Row>
                        {this.state.totalPoints > 0 ?<div>
                            <div className="pointsCalculate">
                                <table>
                                    <tr>
                                        <td>
                                            <p>Total</p>
                                        </td>
                                        <td>
                                            <h5 style={{color:'#666'}}>{this.state.totalPoints}pts</h5>
                                        </td>
                                    </tr>
                                    <tr>
                                    <td>
                                        <p>Points</p>
                                    </td>
                                    <td>
                                        <h5 style={{color:'#66ae13'}}>{ this.props.userAccount.balance ==null ?0 : this.props.userAccount.balance - this.state.totalPoints}pts</h5>
                                    </td>
                                    </tr>
                                </table>
                            </div>
                            <div style={{clear:"both"}}></div>
                            {!this.state.pointsValid && this.props.cart.OrderItems.length>0? <div style={{textAlign:'right',marginRight:'5%'}}>
                                <p>You need additional <span style={{color:'red', fontWeight:'bold'}}>{ -((this.props.userAccount.balance == null ? 0 : this.props.userAccount.balance)  - this.state.totalPoints)}</span> points to complete this order.</p>
                                    <Link to="/purchase">
                                    
                                    <button style={{border:'2px solid #66ae13',color:'#66ae13', width:'120px', fontWeight:'600'}} className="btn btn-sm"> Buy Points</button>
                                    </Link>
                                </div>: null
                                }

                            <div className="deliveryInfoWrapper">
                        <Row>
                                <Col md={this.state.changingInfo ? 12 : 10}>
                                    <h4>Delivery Information</h4>
                                    <br />
                                    {!this.state.changingInfo && (
                                    <table className="deliveryInfo table table-borderless text-muted">
                                        <tr>
                                            <td>Name</td>
                                            <td>{this.state.Order.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Address</td>
                                            <td>{this.state.Order.address}</td>
                                        </tr>
                                        <tr>
                                            <td>City</td>
                                            <td>{this.state.Order.city}</td>
                                        </tr>
                                        <tr>
                                            <td>State</td>
                                            <td>{this.state.Order.state}</td>
                                        </tr>
                                        <tr>
                                            <td>Phone</td>
                                            <td>{this.state.Order.phoneNumber}</td>
                                        </tr>
                                    </table>
                                    )}
                                    
                                </Col>
                                {this.state.changingInfo &&
                                    <Form className="delivery-form-wrapper product-delivery-form">
                                    <Container>
                                    <Row>
                                        <Col md={12}>
                                            <FormGroup>
                                                <Input type="text" value={this.state.Order.name} onChange={this.handleChange} name='name' placeholder="Full Name" />
                                                {this.state.errors.name && (
                                                    <p className="alert alert-danger" style={{ clear: 'both' }}>{this.state.errors.name}</p>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Input type="text" value={this.state.Order.phoneNumber} onChange={this.handleChange} name='phoneNumber' placeholder="Phone number" />
                                                {this.state.errors.phoneNumber && (
                                                    <p className="alert alert-danger">{this.state.errors.phoneNumber}</p>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                        <FormGroup>
                                            <Input type="text" value={this.state.Order.address} onChange={this.handleChange} name='address' placeholder="Address" />
                                            {this.state.errors.address && (
                                                <p className="alert alert-danger">{this.state.errors.address}</p>
                                            )}
                                        </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                        <FormGroup>
                                            <Input type="text" value={this.state.Order.city} onChange={this.handleChange} name='city' placeholder="City" />
                                            {this.state.errors.city && (
                                                <p className="alert alert-danger">{this.state.errors.city}</p>
                                            )}
                                        </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                        <FormGroup>
                                            <Input type="text" value={this.state.Order.state} onChange={this.handleChange} name='state' placeholder="State" />
                                            {this.state.errors.state && (
                                                <p className="alert alert-danger">{this.state.errors.state}</p>
                                            )}

                                        </FormGroup>
                                        </Col>
                                        <button style={{width:'150px'}} onClick={(e) => this.handleUpdateInfo(e)} className="btn btnUpdate btn-sm">
                                            Update Info
                                        </button>
                                        <button style={{width:'150px'}} onClick={(e) => this.handleCancelInfo(e)} className="btn btnCancel btn-sm btn-secondary">
                                            Cancel
                                        </button>
                                        </Row>
                                        </Container>
                                    </Form>
                                }
                            
                        {!this.state.changingInfo && (
                            <Col md={2} className="buttonWrapper">
                                <button className="btn btnChangeDelivery" onClick={this.handleChangeCard}> { this.state.Order.address === "" ? "Add Delivery Info":"Update Info"} </button>
                            </Col>
                        )}
                        </Row>
                    </div>
                    </div>:null}
                    </div>
                </Container>
                <Container>
                <Row className="p-4 shopping-buttons-row">
                    <Col lg={{ size: 4, offset: 4 }} md={{ size: 5 }} sm={{ size: 5 }} xs={12}>
                    <Link to="/">
                        <button className="btn btn-dark">Continue Shopping</button>
                    </Link>
                    </Col>
                    <Col md={4} xs={12}>
                        <button disabled={this.state.pointsValid && this.props.cart.OrderItems.length> 0 ? false:true } onClick={(e) => this.handleSubmit(e)} className="btn btn-dark">Place Order</button>
                    </Col>
                </Row>
                </Container>
                <Modal open={this.state.modalBuyPoints} onClose={this.toggleBuyPoints} center>
            <div style={{ padding: '100px 220px',borderRadius:'7px', color:'#333', textAlign: 'center' }}>
              <img src={tick} alt="" style={{width:'80px'}} />
              <h4 style={{fontWeight:'bold'}}>Order Successful</h4>
              <p style={{ fontSize: '16px' }}>Points Balance : <span style={{ color: '#ffb500',fontWeight:'bold', fontSize: '22px' }}>{this.props.userAccount.balance}pts</span></p>
              <button className="btn" style={{ padding: '10px', width: '170px', background: '#A23B8A', color: 'white' }} onClick={this.toggleBuyPoints}>Okay</button>
            </div>
          </Modal>
            </section >
        );
    }
}


const mapStateToProps = (state) => ({
    selectedNavCategory: state.selectedNavCategory,
    cart: state.cart,
    userAccount: state.loggedInUserAccount,
    originalProducts: state.allProducts
})

const mapDispatchToProps = dispatch => {
    return {
        getSingleProduct: (name) => dispatch(actionCreators.getSingleProduct(name)),
        updateCart: (cart) => dispatch(actionCreators.updateCart(cart)),
        createOrder: (cart) => dispatch(actionCreators.createOrder(cart))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));

