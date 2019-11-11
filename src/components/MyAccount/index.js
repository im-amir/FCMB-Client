import React, {Component} from 'react';
import Navigator from "../Navigator/Navigator";
import {Container, Row, Col} from 'reactstrap';
import Index from "../TopHeader/index";
import Footer from '../Footer/Footer';
import MyAccount from "./MyAccount/MyAccount";
import '../Auth/Activate/Index.scss'

class CartPage extends Component {
    render() {
        return (
            <Container fluid={true} className="containerParent">
                <Container fluid>
                    <Row className="p-3">
                        <Index />
                    </Row>
                </Container>
                <Row >
                    <Col xs={12}>
                        <Navigator />
                    </Col>
                </Row>
                <MyAccount/>
                <Row className="p-5 footer-row">
                    <Footer />
                </Row>
            </Container>
        );
    }
}


export default CartPage;
