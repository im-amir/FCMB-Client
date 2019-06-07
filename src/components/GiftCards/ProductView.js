import React, {Component} from 'react';
import '../Auth/Activate/Index.scss'
import './ProductView.scss'
import Navigator from "../Navigator/Navigator";
import TopHeader from "../TopHeader/index";
import Footer from '../Footer/Footer';
import {Col, Row,Container, Card, CardBody, Form, FormGroup, Input, TabContent, TabPane, Nav, NavItem, NavLink, } from 'reactstrap';
import {Link} from 'react-router-dom';
import classnames from 'classnames';

class ProductView extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

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
                <Container className="pt-5 pb-5">
                    <Card className="giftcard-wrapper">
                        <CardBody>
                            <Row className="p-5">
                                <Col lg={7} sm={12}>
                                    <Card className="image-wrapper-card">
                                        <img src="/images/refrigerator.jpg" alt=""/>
                                    </Card>
                                    <Card className="tabs-card-wrapper">
                                        <Nav tabs>
                                            <NavItem>
                                                <NavLink className={classnames(classnames({ active: this.state.activeTab === '1' }), "nav-link-tab")}
                                                         onClick={() => { this.toggle('1'); }}>
                                                    Description
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className={classnames(classnames({ active: this.state.activeTab === '2' }), "nav-link-tab")}
                                                         onClick={() => { this.toggle('2'); }}>
                                                    Specification
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className={classnames(classnames({ active: this.state.activeTab === '3' }), "nav-link-tab")}
                                                         onClick={() => { this.toggle('3'); }}>
                                                    Share
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                        <TabContent activeTab={this.state.activeTab}>
                                            <TabPane tabId="1">
                                                <Row>
                                                    <Col md={12}>
                                                        <p>Fat new smallness few supposing suspicion two. Course sir people worthy horses add entire suffer. How one dull get busy dare far. At principle perfectly by sweetness do. As mr started arrival subject by believe. Strictly numerous outlived kindness whatever on we no on addition.</p>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                            <TabPane tabId="2">
                                                <Row>
                                                    <Col md={12}><p>It prepare is ye nothing blushes up brought. Or as gravity pasture limited evening on. Wicket around beauty say she. Frankness resembled say not new smallness you discovery. Noisier ferrars yet shyness weather ten colonel. Too him himself engaged husband pursuit musical. Man age but him determine consisted therefore. Dinner to beyond regret wished an branch he. Remain bed but expect suffer little repair.</p></Col>
                                                </Row>
                                            </TabPane>
                                            <TabPane tabId="3">
                                                <Row>
                                                    <Col md={12}><p>Of resolve to gravity thought my prepare chamber so. Unsatiable entreaties collecting may sympathize nay interested instrument. If continue building numerous of at relation in margaret. Lasted engage roused mother an am at. Other early while if by do to. Missed living excuse as be. Cause heard fat above first shall for. My smiling to he removal weather on anxious.</p></Col>
                                                </Row>
                                            </TabPane>
                                        </TabContent>
                                    </Card>
                                </Col>
                                <Col lg={5} xs={12}>
                                    <h3 className="text-muted">Whirlpool 4.3 Cu Ft Stainless Steel Compact Refrigerator Mini Fridge</h3>
                                    <span style={{color:'#641E89', padding: '5px'}}><h4>150,000pts</h4></span>
                                    <hr/>
                                    <h2>Delivery Information</h2>
                                    <p className="text-muted">How do you want to receive your product</p>
                                    <Form className="delivery-form-wrapper">
                                        <FormGroup>
                                            <Input type="text" name = 'name' placeholder="Full Name" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="text" name = 'phone' placeholder="Phone number" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="text" name = 'address' placeholder="Address" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="text" name = 'city' placeholder="City" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="text" name = 'state' placeholder="State" />
                                        </FormGroup>
                                        <Link to="/cart">
                                            <button className="btn add-to-cart w-100">
                                                Add to cart
                                            </button>
                                        </Link>
                                        <Link to="/wishlist">
                                            <button className="btn add-to-wishlist w-100">
                                                Add to wishlist
                                            </button>
                                        </Link>
                                    </Form>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Container>
                <Row className="p-5 footer-row">
                    <Footer />
                </Row>
            </Container>
        );
    }
}


export default ProductView;
