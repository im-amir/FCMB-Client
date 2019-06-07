import React, {Component} from 'react';
import './Index.scss'
import Navigator from "../../Navigator/Navigator";
import {Container, Row, Col} from 'reactstrap';
import TopHeader from "../../TopHeader/index";
import Partners from '../Partners';
import Footer from '../../Footer/Footer';
import ActivateCard from "./ActivateCard";


class Index extends Component {
    render() {
        return (
            <Container fluid={true} className="containerParent">
                <Row className="p-3">
                    <TopHeader />
                </Row>
                <Row >
                    <Col xs={12}>
                        <Navigator />
                    </Col>
                </Row>
                <Row className="headerSection">
                    <ActivateCard />
                </Row>
                <Row className="p-5">
                    <Partners />
                </Row>
                <Row className="p-5 footer-row">
                    <Footer />
                </Row>
            </Container>
        );
    }
}


export default Index;
