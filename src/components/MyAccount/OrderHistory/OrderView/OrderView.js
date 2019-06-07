import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import './OrderView.scss';

class OrderView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.orderData);
        return (
            <div className="order-view-wrapper" style={{display: `${this.props.orderDisplay ? 'block': 'none'}`}}>
                <Row>
                    <Col>
                        <h6 className="text-muted mt-auto mb-auto">Order No. 00937632</h6>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        <img src="https://hairlavie.com/images/hlv/lp/hlv-screenshot.jpg" alt=""/>
                    </Col>
                    <Col lg={6}>
                        Lavian Spa Gift Card voucher worth N5000 - by SureGifts <br/>
                        <span>10,000pts</span>
                    </Col>
                    <Col lg={3}>
                        <button className="btn btn-danger">Cancel</button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6 className="text-muted mt-auto mb-auto">Delivery Details</h6>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8}>
                        <p>Recipient's Full name</p>
                        <h6>Taimur Hussain</h6>
                        <p>Recipient's Email</p>
                        <h6>taimur@gmail.com</h6>
                        <p>Personal Message</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci amet blanditiis cupiditate deleniti deserunt dicta distinctio dolor doloribus, eum explicabo impedit ipsum laborum maxime suscipit tempore totam velit veritatis.</p>
                        <p>Status</p>
                        <h5>Delivered</h5>
                    </Col>
                </Row>
            </div>
            );
    }
}


export default OrderView;
