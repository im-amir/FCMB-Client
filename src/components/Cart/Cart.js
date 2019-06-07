import React, {Component} from 'react';
import { Container, Row, Col, Input} from 'reactstrap';
import PointBalance from "../MyAccount/PointBalance/PointBalance";
import './Cart.scss'

class Cart extends Component {
    render() {
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
                                        <Input type="select" name="select">
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
                                    <td colSpan="2"></td>
                                    <td>
                                        <h5>Total</h5>
                                    </td>
                                    <td>
                                        <h4>20,000pts</h4>
                                    </td>
                                    <td></td>
                                </tr>
                            </table>
                        </Row>
                    </div>
                    <Row className="p-4 shopping-buttons-row">
                        <Col lg={{size: 4, offset: 4}} md={{size: 5}} sm={{size: 5}} xs={12}>
                            <button className="btn btn-dark">Continue Shopping</button>
                        </Col>
                        <Col md={4} xs={12}>
                            <button className="btn btn-dark">Place Order</button>
                        </Col>
                    </Row>

                </Container>
            </section>
        );
    }
}


export default Cart;

