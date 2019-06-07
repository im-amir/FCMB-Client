import React, {Component} from 'react';
import '../../Auth/Activate/Index.scss'
import './index.scss'
import Navigator from "../../Navigator/Navigator";
import TopHeader from "../../TopHeader/index";
import Footer from '../../Footer/Footer';
import {Col, Row,Container, Card, CardBody, Form, FormGroup, Input, TabContent, TabPane, Nav, NavItem, NavLink, } from 'reactstrap';
import {Link} from 'react-router-dom';
import classnames from 'classnames';

class SendToFriend extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            radioBtnType: "friend",
        };
    }

    handleRadio(type) {
        this.setState({radioBtnType: type})

    };

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
                    <Card className="giftcard-wrapper-friends">
                        <CardBody>
                            <Row className="p-5">
                                <Col lg={7} sm={12}>
                                    <h2 className="title">Lavian Spa Gift Card</h2>
                                    <div className="image-wrapper">
                                        <img src="https://hairlavie.com/images/hlv/lp/hlv-screenshot.jpg" alt=""/>
                                    </div>
                                    <Card className="tabs-card-wrapper-friends">
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
                                                    Redemption
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className={classnames(classnames({ active: this.state.activeTab === '3' }), "nav-link-tab")}
                                                         onClick={() => { this.toggle('3'); }}>
                                                    Locations
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className={classnames(classnames({ active: this.state.activeTab === '4' }), "nav-link-tab")}
                                                         onClick={() => { this.toggle('4'); }}>
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
                                            <TabPane tabId="4">
                                                <Row>
                                                    <Col md={12}><p>Of resolve to gravity thought my prepare chamber so. Unsatiable entreaties collecting may sympathize nay interested instrument. If continue building numerous of at relation in margaret. Lasted engage roused mother an am at. Other early while if by do to. Missed living excuse as be. Cause heard fat above first shall for. My smiling to he removal weather on anxious.</p></Col>
                                                </Row>
                                            </TabPane>
                                        </TabContent>
                                    </Card>
                                </Col>
                                <Col lg={5} xs={12}>
                                    <Form className="delivery-form-wrapper">
                                        <FormGroup>
                                            <span className="friend-radio-btn">
                                                <span onClick={() => this.handleRadio("friend")} className={this.state.radioBtnType === "friend" ? "clicked" : "notClicked" }> </span>
                                                <label htmlFor="">Send to friend</label>
                                            </span>
                                                <span className="self-radio-btn">
                                                <span onClick={() => this.handleRadio("self")} className={this.state.radioBtnType === "self" ? "clicked" : "notClicked" }> </span>
                                                <label htmlFor="">Redeem for self</label>
                                            </span>
                                        </FormGroup>
                                        <div className="range-input-wrapper">
                                            <input type="range" min="0" max="100" className="range-slider"/>
                                            <span>500pts</span>
                                            <span>100,000pts</span>
                                        </div>
                                        <hr/>
                                        {this.state.radioBtnType === "friend" ? (
                                            <div>
                                                <h2>Delivery Information</h2>
                                                <p className="text-muted">Details of your gift card delivery</p>
                                                <div className="checkbox-wrapper">
                                                    <input type="checkbox" className="styled-checkbox" id="styled-checkbox-1"/>
                                                    <label htmlFor="styled-checkbox-1">Send to email address</label>
                                                </div>
                                                <div className="checkbox-wrapper">
                                                    <input type="checkbox" className="styled-checkbox" id="styled-checkbox-2"/>
                                                    <label htmlFor="styled-checkbox-2">Send to Phone Number</label>
                                                </div>
                                            </div>
                                        ) : <div>
                                                <h2>Delivery Information</h2>
                                                <p className="text-muted">How do you want to receive your product</p>
                                                <FormGroup>
                                                    <Input type="text" name = 'name' placeholder="Full Name" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Input type="text" name = 'address' placeholder="Email Address" />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Input type="text" name = 'city' placeholder="Personal Message" />
                                                </FormGroup>
                                            </div>
                                        }
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


export default SendToFriend;
