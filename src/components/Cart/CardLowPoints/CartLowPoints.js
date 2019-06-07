import React, {Component} from 'react';
import { Container, Row, Col, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import {Link} from 'react-router-dom';
import PointBalance from "../../MyAccount/PointBalance/PointBalance";
import './CartLowPoints.scss'

class CartLowPoints extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalBuyPoints: false,
            modalCompleteOrder: false
        };
    }
    toggleBuyPoints = () => {
        this.setState(prevState => ({ modalBuyPoints: !(prevState.modalBuyPoints)}));
    };
    toggleCompleteOrder = () => {
        this.setState(prevState => ({ modalCompleteOrder: !prevState.modalCompleteOrder}));
    };
    render() {
        let lowPoints = true;
        return (
            <section className="cart-parent-wrapper">
                <Container>
                    <PointBalance/>
                    <div style={{clear: 'both'}}></div>
                    <div className="cart-child-wrapper">
                        <Row className="shopping-header-row">
                            <Col>
                                <h4>Shopping Cart(2 items)</h4>
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
                                <tr>
                                    <td>
                                        <img src="https://hairlavie.com/images/hlv/lp/hlv-screenshot.jpg" alt=""/>
                                        <span>Lavien Spa Gift Card Voucher worth $5000 - by SureGifts</span>
                                    </td>
                                    <td>
                                        <Input type="select" name="select" id="exampleSelect">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Input>
                                    </td>
                                    <td>10,000pts</td>
                                    <td><i className="fas fa-trash-alt"></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src="https://hairlavie.com/images/hlv/lp/hlv-screenshot.jpg" width="170px" height="100px" alt=""/>
                                        <span>Lavien Spa Gift Card Voucher worth $5000 - by SureGifts</span>
                                    </td>
                                    <td>
                                        <Input type="select" name="select" id="exampleSelect">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Input>
                                    </td>
                                    <td>10,000pts</td>
                                    <td><i className="fas fa-trash-alt"></i></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src="https://hairlavie.com/images/hlv/lp/hlv-screenshot.jpg" width="170px" height="100px" alt=""/>
                                        <span>Lavien Spa Gift Card Voucher worth $5000 - by SureGifts</span>
                                    </td>
                                    <td>
                                        <Input type="select" name="select" id="exampleSelect">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Input>
                                    </td>
                                    <td>10,000pts</td>
                                    <td><i className="fas fa-trash-alt"></i></td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <h5>Total:</h5>
                                    </td>
                                    <td colSpan="2">
                                        <h4>20,000pts</h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <h5>Points:</h5>
                                    </td>
                                    <td colSpan="3">
                                        <h4>-100,000pts</h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="4">
                                        <h5>
                                            You need additional <span>100,000pts</span> to complete this order
                                        </h5>
                                    </td>
                                </tr>
                            </table>
                        </Row>
                    </div>
                    <Row className="p-4 complete-order-buttons-row">
                        <Col lg={{size: 4, offset: 4}} md={{size: 5}} sm={{size: 5}} xs={12}>
                            <button className="btn btn-dark">Continue Shopping</button>
                        </Col>
                        <Col md={4} xs={12}>
                            <button className="btn btn-dark" onClick={!lowPoints ? this.toggleBuyPoints: this.toggleCompleteOrder}>Complete Order</button>
                        </Col>
                    </Row>


                    <Modal isOpen={this.state.modalBuyPoints} toggle={() => this.toggleBuyPoints} className={this.props.className}>
                        <ModalHeader style={{border: 'none'}} toggle={this.toggleBuyPoints}> </ModalHeader>
                        <ModalBody style={{padding: '100px 100px 150px 100px', textAlign: 'center'}}>
                            <p>Need <span style={{color: '#FFB90C'}}>100,000pts</span> to complete this offer</p>
                            <p>Amount to pay <span style={{color: '#EC1933', fontSize:'20px'}}>N15,000</span></p>
                            <button className="btn" style={{padding: '10px', width: '170px', background: '#66AE13', color: 'white'}}>Pay</button>
                        </ModalBody>
                    </Modal>
                    <Modal isOpen={this.state.modalCompleteOrder} toggle={() => this.toggleCompleteOrder} className={this.props.className}>
                        <ModalHeader style={{border: 'none'}} toggle={this.toggleCompleteOrder}> </ModalHeader>
                        <ModalBody style={{padding: '100px 100px 150px 100px', textAlign: 'center'}}>
                            <img src="/images/completeOrder.png" alt=""/>
                            <h4>Order Successful</h4>
                            <p>Point Balance: <span style={{color: '#FFB602', fontSize:'24px'}}>80,000pts</span></p>
                            <Link to="/"><button className="btn" style={{padding: '10px', width: '170px', background: '#A23B8A', color: 'white'}}>Home</button></Link>
                        </ModalBody>
                    </Modal>

                </Container>
            </section>
        );
    }
}


export default CartLowPoints;

