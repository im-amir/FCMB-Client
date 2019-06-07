import React, {Component} from 'react';
import '../Auth/Activate/Index.scss'
import Navigator from "../Navigator/Navigator";
import {Container, Row, Col} from 'reactstrap';
import TopHeader from "../TopHeader/";
import Footer from '../Footer/Footer';
import Cart from "./Cart";

class Index extends Component {
    render() {
        return (
            <Container fluid={true} className="containerParent">
                <Container className="header-container">
                    <Row className="p-3" style={{marginRight: '-180px'}}>
                        <TopHeader />
                    </Row>
                </Container>
                <Row >
                    <Col xs={12}>
                        <Navigator />
                    </Col>
                </Row>
                <Cart/>
                <Row className="p-5 footer-row">
                    <Footer />
                </Row>
            </Container>
        );
    }
}


export default Index;
