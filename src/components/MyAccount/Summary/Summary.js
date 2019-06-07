import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom'
import './Summary.scss';

class Summary extends Component {
    render() {
        return (
            <div className="summary-wrapper">
                <Row>
                    <Col md={8}>
                        <p>Name:</p>
                        <h4>James Agbalumo</h4>
                    </Col>
                    <Col md={4}>
                        <p>Account Number:</p>
                        <h4>0023456789</h4>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} xs={12}>
                        <p>Total Points</p>
                        <h4>300,000pts</h4>
                    </Col>
                    <Col md={3} xs={12}>
                        <p>Redeemed Points</p>
                        <h4>200,000pts</h4>
                    </Col>
                    <Col md={3} xs={12}>
                        <p>Redeemed Points</p>
                        <h4>200,000pts</h4>
                    </Col>
                </Row>
                <Row>
                    <h4>Earnings</h4>
                </Row>
                <div className="earnings">
                    <Row>
                        <Col md={3} xs={12}>
                            <h5>Bonus Points</h5>
                        </Col>
                        <Col md={3} xs={12}>
                            <h5>15,000pts</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} xs={12}>
                            <h5>Bonus Points</h5>
                        </Col>
                        <Col md={3} xs={12}>
                            <h5>220,000pts</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} xs={12}>
                            <h5>Bonus Points</h5>
                        </Col>
                        <Col md={3} xs={12}>
                            <h5>66,000pts</h5>
                        </Col>
                    </Row>
                    <Row className="last-row">
                        <Col md={{size:5, offset: 2}} xs={12}>
                            <p>Have another FCMB account?</p>
                        </Col>
                        <Col md={5} xs={12}>
                            <Link className='btn' to="/link_account">Link another account</Link>
                        </Col>
                    </Row>
                    <div style={{clear: 'both'}}></div>
                </div>
            </div>
        );
    }
}

export default Summary;
