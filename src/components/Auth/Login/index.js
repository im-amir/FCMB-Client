import React, {Component} from 'react';
import './Index.scss'
import Navigator from "../../Navigator/Navigator";
import {Container, Row, Col} from 'reactstrap';
import TopHeader from "../../TopHeader/";
import LoginCard from "./../Login/LoginCard";
import Partners from './../Partners';
import Footer from '../../Footer/Footer';


class Index extends Component {
    render() {
        return (
            <Container fluid={true} className="containerParent">
                <Container fluid>
                    <Row className="p-3">
                        <TopHeader page="login"/>
                    </Row>
                </Container>
                <Row >
                    <Col xs={12}>
                        <Navigator />
                    </Col>
                </Row>
                <Row className="headerSection">
                    <LoginCard/>
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
