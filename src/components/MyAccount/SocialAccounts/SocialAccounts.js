import React, {Component} from 'react';
import {Col, Row, Card} from 'reactstrap';
import {Link} from 'react-router-dom';
import './SocialAccounts.scss'

class SocialAccounts extends Component {
    render() {
        return (
            <Card className="social-account-wrapper">
                <Row>
                    <Col xs={12}>Social Accounts</Col>
                </Row>
                <Row>
                    <Col md={2}>
                        <img src="/images/facebook.png" alt=""/>
                    </Col>
                    <Col md={6}>
                        <p className="text-muted font-weight-light">Facebook</p>
                        <h5>James Scalar Agbas</h5>
                    </Col>
                    <Col md={4}>
                        <Link to="/disconnect">
                            <button className="btn">Disconnect</button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col md={2}>
                        <img src="/images/twitter.png" alt=""/>
                    </Col>
                    <Col md={6}>
                        <p className="text-muted font-weight-light">Twitter</p>
                        <h5>Not Connected</h5>
                    </Col>
                    <Col md={4}>
                        <Link to="/disconnect">
                            <button className="btn">Disconnect</button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col md={2}>
                        <img src="/images/insta.jpg" alt=""/>
                    </Col>
                    <Col md={6}>
                        <p className="text-muted font-weight-light">Instagram</p>
                        <h5>@Scalaragba</h5>
                    </Col>
                    <Col md={4}>
                        <Link to="/disconnect">
                            <button className="btn">Disconnect</button>
                        </Link>
                    </Col>
                </Row>
            </Card>
        );
    }
}


export default SocialAccounts;
