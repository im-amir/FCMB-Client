import React, { Component } from 'react';
import '../Auth/Activate/Index.scss'
import './ProductView.scss'
import Navigator from "../Navigator/Navigator";
import TopHeader from "../TopHeader/index";
import Footer from '../Footer/Footer';
import { Col, Row, Container, Card, CardBody, Form, FormGroup, Input, TabContent, TabPane, Nav, NavItem, NavLink, } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import * as actionCreators from '../../actions/index.js';
import { connect } from "react-redux";
import classnames from 'classnames';
import Joi from 'joi-browser';

class ProductView extends Component {
    state = {
        activeTab: '1',
        activeProduct: {"product":{}},
        Order:{
            name:'',
            city:'',
            state:'',
            address:'',
            phoneNumber:'',
            userId:'',
            points:0
        },
        errors:[]
    };



    componentWillMount() {
        this.props.getSingleProduct(this.props.match.params.name);

        let Order = {...this.state.Order};
        Order.userId = this.props.userAccount.Id;
        this.setState({Order})
    }

    componentWillReceiveProps(nextProps) {
        let activeProduct= {...this.state.activeProduct};
        activeProduct.product = nextProps.singleProduct.product;
        this.setState({ activeProduct});
    }


    handleChange = ({currentTarget:input}) => {

        let Order = {...this.state.Order};

        Order[input.name] = input.value;

        this.setState({Order});
    }

    handleAddtoCart=(e)=>{
        e.preventDefault();

        let singleItem = {...this.props.cart};

        let filteredProduct= singleItem.OrderItems.filter(o=> o.SKU === this.state.activeProduct.product.SKU);

        if (filteredProduct.length < 1) {
            let product = {...this.state.activeProduct.product};
            product["userId"] = this.props.userAccount.Id;
            product.amount = 1;
            singleItem.OrderItems.push(product);
            singleItem.Order = this.state.Order;

            this.props.updateCart(singleItem);
        }

        this.props.history.replace("/cart");
    }


    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <Container fluid={true} className="containerParent">
                <Container className="header-container" fluid>
                    <Row className="p-3">
                        <TopHeader />
                    </Row>
                </Container>
                <Row >
                    <Col xs={12}>
                        <Navigator />
                    </Col>
                </Row>
                <Container className="pt-5 pb-5">
                    <Card className="giftcard-wrapper">
                        <CardBody>
                            <Row className="p-5">
                                <Col lg={7} sm={4}>
                                    <Card className="image-wrapper-card">
                                        <img src={`./Images/products/${this.state.activeProduct.product.image}`} alt="" />
                                    </Card>
                                    <Card className="tabs-card-wrapper">
                                        <Nav tabs>
                                            <NavItem>
                                                <NavLink className={classnames(classnames({ active: this.state.activeTab === '1' }), "nav-link-tab")}
                                                    onClick={() => { this.toggle('1'); }}>
                                                    Description
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className={classnames(classnames({ active: this.state.activeTab === '2' }), "nav-link-tab")}
                                                    onClick={() => { this.toggle('2'); }}>
                                                    Specification
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className={classnames(classnames({ active: this.state.activeTab === '3' }), "nav-link-tab")}
                                                    onClick={() => { this.toggle('3'); }}>
                                                    Share
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                        <TabContent activeTab={this.state.activeTab}>
                                            <TabPane tabId="1">
                                                <Row>
                                                    <Col md={12}>
                                                        <p>{this.state.activeProduct.product.description}</p>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                            <TabPane tabId="2">
                                                <Row>
                                                    <Col md={12}><p>{this.state.activeProduct.product.specification}</p></Col>
                                                </Row>
                                            </TabPane>
                                            <TabPane tabId="3">
                                                <Row>
                                                    <Col md={12}><p>Of resolve to gravity thought my prepare chamber so. Unsatiable entreaties collecting may sympathize nay interested instrument. If continue building numerous of at relation in margaret. Lasted engage roused mother an am at. Other early while if by do to. Missed living excuse as be. Cause heard fat above first shall for. My smiling to he removal weather on anxious.</p></Col>
                                                </Row>
                                            </TabPane>
                                        </TabContent>
                                    </Card>
                                </Col>
                                <Col lg={5} xs={12}>
                                    <h3 style={{marginTop:'50px'}} className="">{this.state.activeProduct.product.name}</h3>
                                    <span style={{ color: '#641E89', padding: '5px' }}><h4>{this.state.activeProduct.product.points} points</h4></span>
                                    <hr />
                                    <Form className="delivery-form-wrapper product-delivery-form">
                                    <button onClick={(e)=> this.handleAddtoCart(e)} className="btn add-to-cart w-100">
                                                Add to cart
                                            </button>
                                        <Link to="/wishlist">
                                            <button className="btn add-to-wishlist w-100">
                                                Add to wishlist
                                            </button>
                                        </Link>
                                        </Form>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Container>
                <Row className="p-5 footer-row">
                    <Footer />
                </Row>
            </Container>
        );
    }
}



const mapStateToProps = (state) => ({
    allProducts: state.allProducts,
    products: state.products,
    singleProduct: state.singleProduct,
    selectedNavCategory: state.selectedNavCategory,
    cart:state.cart,
    userAccount:state.loggedInUserAccount
})

const mapDispatchToProps = dispatch => {
    return {
        getSingleProduct: (name) => dispatch(actionCreators.getSingleProduct(name)),
        updateCart: (cart) => dispatch(actionCreators.updateCart(cart)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductView));

