import React, {Component} from 'react';
import '../Auth/Activate/Index.scss'
import './Index.scss'
import Navigator from "../Navigator/Navigator";
import {Container, Row, Col} from 'reactstrap';
import TopHeaderIndex from "../TopHeader/index";
import Footer from '../Footer/Footer';
import Electronics from "./Electronics";

class Index extends Component {
    render() {
        return (
            <Container fluid={true} className="container-parent">
                <Container className="header-container">
                    <Row className="p-3">
                        <TopHeaderIndex />
                    </Row>
                </Container>
                <Row >
                    <Col xs={12}>
                        <Navigator />
                    </Col>
                </Row>
                <Row className="electronics-header-row">
                    <Col>
                        <h1>Electronics Gadgets</h1>
                        <p>It's important to use cocoa butter. It's the key to more success, why not live smooth?
                        Why live rough? Surround yourself with angels,</p>
                    </Col>
                </Row>
                <Electronics/>
                <Row className="p-5 footer-row">
                    <Footer />
                </Row>
            </Container>
        );
    }
}


export default Index;
