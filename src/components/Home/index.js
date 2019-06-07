import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink, Navbar, NavbarToggler, Collapse} from 'reactstrap';
import Header from "./Header";
import {Container, Row, Col} from 'reactstrap';
import Footer from '../Footer/Footer';
import './Index.scss';
import classnames from "classnames";

const style = {
    activateBtn: {
        backgroundColor: '#A23B8A',
        color: 'white',
        padding: '5px 40px 10px 40px',
        marginTop: '15px',
    },
}
class Home extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            activeTab: '1',
            isOpen: false
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    toggleNav() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Container className="home-parent-wrapper" fluid>
                <div>
                    <header className="home-main-header-wrapper">
                        <div className="home-header-wrapper">
                            <div className="logo-wrapper">
                                <Link to="/">
                                    <img src="/images/logo.png" alt=""/>
                                </Link>
                            </div>
                            <Header/>
                            <div className="header-buttons-wrapper">
                                <div className="login-button">
                                    <Link to="/login">
                                        <button className="btn">Login</button>
                                    </Link>
                                </div>
                                <div className="activate-button">
                                    <Link to="/activate">
                                        <button className="btn" style={style.activateBtn}>Activate</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="header-content-wrapper">
                            <div className="inner-wrapper">
                                <h1>Don't Just Bank <br/> Get Rewarded</h1>
                                <h5 className="text-muted">In life you have to take the trash out, If you have trash in your
                                    life, take it out, throw it away, get ride of it, major key. It's important
                                    to use cocoa butter.</h5>
                                <div className="image-wrapper">
                                    <img src="/images/activate.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="sections-background-wrapper">
                        <section className="how-to">
                            <h2>How it works</h2>
                            <h6 className="text-muted">Get rewarded in three easy steps without stress or delay, just follow the steps below</h6>
                            <img src="/images/process_timeline.png" alt=""/>
                            <div className="process-wrapper">
                                <div>
                                    <h4>Activate</h4>
                                    <p>Stay focused, wraith talk. <br/>Lion Celebrate success right, <br/>
                                        the only way, apple.</p>
                                </div>
                                <div>
                                    <h4>Earn</h4>
                                    <p>Stay focused, wraith talk. <br/>Lion Celebrate success right, <br/>
                                        the only way, apple.</p>
                                </div>
                                <div>
                                    <h4>Redeem</h4>
                                    <p>Stay focused, wraith talk. <br/>Lion Celebrate success right, <br/>
                                        the only way, apple.</p>
                                </div>
                            </div>
                        </section>
                        <section className="top-rewards">
                            <h2>Top Rewards</h2>
                            <Navbar light expand="md">
                                <NavbarToggler onClick={this.toggleNav} />
                                <Collapse isOpen={this.state.isOpen} navbar className="navbar-wrapper">
                                    <Nav tabs>
                                        <NavItem>
                                            <NavLink className={classnames(classnames({ active: this.state.activeTab === '1' }), "nav-link-tab")}
                                                     onClick={() => { this.toggle('1'); }}>
                                                        <h5>Sports</h5>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames(classnames({ active: this.state.activeTab === '2' }), "nav-link-tab")}
                                                     onClick={() => { this.toggle('2'); }}>
                                                        <h5>For Kids</h5>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames(classnames({ active: this.state.activeTab === '3' }), "nav-link-tab")}
                                                     onClick={() => { this.toggle('3'); }}>
                                                <h5>Restaurants</h5>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames(classnames({ active: this.state.activeTab === '4' }), "nav-link-tab")}
                                                     onClick={() => { this.toggle('4'); }}>
                                                        <h5>Fashion</h5>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames(classnames({ active: this.state.activeTab === '5' }), "nav-link-tab")}
                                                     onClick={() => { this.toggle('5'); }}>
                                                        <h5>Electronics</h5>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames(classnames({ active: this.state.activeTab === '6' }), "nav-link-tab")}
                                                     onClick={() => { this.toggle('6'); }}>
                                                        <h5>Luxury</h5>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames(classnames({ active: this.state.activeTab === '7' }), "nav-link-tab")}
                                                     onClick={() => { this.toggle('7'); }}>
                                                        <h5>Games</h5>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </Navbar>
                            <TabContent activeTab={this.state.activeTab} className="tabs-wrapper">
                                <TabPane tabId="1">
                                    <Row>
                                        <Col xl={3} lg={4} md={6} xs={12}>
                                            <img src="https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg" alt=""/>
                                            <h6>Denaki Lingerie</h6>
                                            <p>Learning is cool, but knowing is <br/>
                                                better, and I know the key to</p>
                                        </Col>
                                        <Col xl={3} lg={4} md={6} xs={12}>
                                            <img src="https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg" alt=""/>
                                            <h6>Denaki Lingerie</h6>
                                            <p>Learning is cool, but knowing is <br/>
                                                better, and I know the key to</p>
                                        </Col>
                                        <Col xl={3} lg={4} md={6} xs={12}>
                                            <img src="https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg" alt=""/>
                                            <h6>Denaki Lingerie</h6>
                                            <p>Learning is cool, but knowing is <br/>
                                                better, and I know the key to</p>
                                        </Col>
                                        <Col xl={3} lg={4} md={6} xs={12}>
                                            <img src="https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg" alt=""/>
                                            <h6>Denaki Lingerie</h6>
                                            <p>Learning is cool, but knowing is <br/>
                                                better, and I know the key to</p>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row>
                                        <Col xl={3} lg={4} md={6} xs={12}>
                                            <img src="https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg" alt=""/>
                                            <h6>Denaki Lingerie</h6>
                                            <p>Learning is cool, but knowing is <br/>
                                                better, and I know the key to</p>
                                        </Col>
                                        <Col xl={3} lg={4} md={6} xs={12}>
                                            <img src="https://www.gettyimages.com/gi-resources/images/CreativeLandingPage/HP_Sept_24_2018/CR3_GettyImages-159018836.jpg" alt=""/>
                                            <h6>Denaki Lingerie</h6>
                                            <p>Learning is cool, but knowing is <br/>
                                                better, and I know the key to</p>
                                        </Col>
                                        <Col xl={3} lg={4} md={6} xs={12}>
                                            <img src="https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg" alt=""/>
                                            <h6>Denaki Lingerie</h6>
                                            <p>Learning is cool, but knowing is <br/>
                                                better, and I know the key to</p>
                                        </Col>
                                        <Col xl={3} lg={4} md={6} xs={12}>
                                            <img src="https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg" alt=""/>
                                            <h6>Denaki Lingerie</h6>
                                            <p>Learning is cool, but knowing is <br/>
                                                better, and I know the key to</p>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="3">
                                    <Row>
                                        <Col xl={3} lg={4} md={6} xs={12}>
                                            <img src="https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg" alt=""/>
                                            <h6>Denaki Lingerie</h6>
                                            <p>Learning is cool, but knowing is <br/>
                                                better, and I know the key to</p>
                                        </Col>
                                        <Col xl={3} lg={4} md={6} xs={12}>
                                            <img src="https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg" alt=""/>
                                            <h6>Denaki Lingerie</h6>
                                            <p>Learning is cool, but knowing is <br/>
                                                better, and I know the key to</p>
                                        </Col>
                                        <Col xl={3} lg={4} md={6} xs={12}>
                                            <img src="https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg" alt=""/>
                                            <h6>Denaki Lingerie</h6>
                                            <p>Learning is cool, but knowing is <br/>
                                                better, and I know the key to</p>
                                        </Col>
                                        <Col xl={3} lg={4} md={6} xs={12}>
                                            <img src="https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg" alt=""/>
                                            <h6>Denaki Lingerie</h6>
                                            <p>Learning is cool, but knowing is <br/>
                                                better, and I know the key to</p>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="4">
                                    <Row>
                                        <Col xl={3} lg={4} md={6} xs={12}>
                                            <img src="https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg" alt=""/>
                                            <h6>Denaki Lingerie</h6>
                                            <p>Learning is cool, but knowing is <br/>
                                                better, and I know the key to</p>
                                        </Col>
                                        <Col xl={3} lg={4} md={6} xs={12}>
                                            <img src="https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg" alt=""/>
                                            <h6>Denaki Lingerie</h6>
                                            <p>Learning is cool, but knowing is <br/>
                                                better, and I know the key to</p>
                                        </Col>
                                        <Col xl={3} lg={4} md={6} xs={12}>
                                            <img src="https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg" alt=""/>
                                            <h6>Denaki Lingerie</h6>
                                            <p>Learning is cool, but knowing is <br/>
                                                better, and I know the key to</p>
                                        </Col>
                                        <Col xl={3} lg={4} md={6} xs={12}>
                                            <img src="https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg" alt=""/>
                                            <h6>Denaki Lingerie</h6>
                                            <p>Learning is cool, but knowing is <br/>
                                                better, and I know the key to</p>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="5">
                                    <Row>
                                        <Col xl={3} lg={4} md={6} xs={12}>
                                            <img src="https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg" alt=""/>
                                            <h6>Denaki Lingerie</h6>
                                            <p>Learning is cool, but knowing is <br/>
                                                better, and I know the key to</p>
                                        </Col>
                                        <Col xl={3} lg={4} md={6} xs={12}>
                                            <img src="https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg" alt=""/>
                                            <h6>Denaki Lingerie</h6>
                                            <p>Learning is cool, but knowing is <br/>
                                                better, and I know the key to</p>
                                        </Col>
                                        <Col xl={3} lg={4} md={6} xs={12}>
                                            <img src="https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg" alt=""/>
                                            <h6>Denaki Lingerie</h6>
                                            <p>Learning is cool, but knowing is <br/>
                                                better, and I know the key to</p>
                                        </Col>
                                        <Col xl={3} lg={4} md={6} xs={12}>
                                            <img src="https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg" alt=""/>
                                            <h6>Denaki Lingerie</h6>
                                            <p>Learning is cool, but knowing is <br/>
                                                better, and I know the key to</p>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="6">
                                    <Row>
                                        <Col xl={3} lg={4} md={6} xs={12}>
                                            <img src="https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg" alt=""/>
                                            <h6>Denaki Lingerie</h6>
                                            <p>Learning is cool, but knowing is <br/>
                                                better, and I know the key to</p>
                                        </Col>
                                        <Col xl={3} lg={4} md={6} xs={12}>
                                            <img src="https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg" alt=""/>
                                            <h6>Denaki Lingerie</h6>
                                            <p>Learning is cool, but knowing is <br/>
                                                better, and I know the key to</p>
                                        </Col>
                                        <Col xl={3} lg={4} md={6} xs={12}>
                                            <img src="https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg" alt=""/>
                                            <h6>Denaki Lingerie</h6>
                                            <p>Learning is cool, but knowing is <br/>
                                                better, and I know the key to</p>
                                        </Col>
                                        <Col xl={3} lg={4} md={6} xs={12}>
                                            <img src="https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg" alt=""/>
                                            <h6>Denaki Lingerie</h6>
                                            <p>Learning is cool, but knowing is <br/>
                                                better, and I know the key to</p>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="7">
                                    <Row>
                                        <Col xl={3} lg={4} md={6} xs={12}>
                                            <img src="https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg" alt=""/>
                                            <h6>Denaki Lingerie</h6>
                                            <p>Learning is cool, but knowing is <br/>
                                                better, and I know the key to</p>
                                        </Col>
                                        <Col xl={3} lg={4} md={6} xs={12}>
                                            <img src="https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg" alt=""/>
                                            <h6>Denaki Lingerie</h6>
                                            <p>Learning is cool, but knowing is <br/>
                                                better, and I know the key to</p>
                                        </Col>
                                        <Col xl={3} lg={4} md={6} xs={12}>
                                            <img src="https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg" alt=""/>
                                            <h6>Denaki Lingerie</h6>
                                            <p>Learning is cool, but knowing is <br/>
                                                better, and I know the key to</p>
                                        </Col>
                                        <Col xl={3} lg={4} md={6} xs={12}>
                                            <img src="https://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg" alt=""/>
                                            <h6>Denaki Lingerie</h6>
                                            <p>Learning is cool, but knowing is <br/>
                                                better, and I know the key to</p>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>

                            <a href="#">
                                <button className="btn">See more Rewards</button>
                            </a>
                        </section>
                        <section className="fcmb-part">
                            <Row>
                                <Col lg={8} md={12}>
                                    <h1>Want to be part of this but you don't have FCMB account?</h1>
                                </Col>
                                <Col lg={4} md={12}>
                                    <a href="#">
                                        <button className="btn">Open one Now</button>
                                    </a>
                                </Col>
                            </Row>
                        </section>
                        <section className="testimonials">
                            <h2>Testimonials</h2>
                            <h6 className="text-muted">Get rewarded in three easy steps without stress or delay, just follow the steps below</h6>
                            <Row>
                                <Col xl={4} md={6} xs={12}>
                                    <div className="lower-layer"></div>
                                    <div className="upper-layer">
                                        <h6>David Agbalumo</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab explicabo libero numquam! Aperiam cumque doloribus eaque </p>
                                    </div>
                                    <img src="https://cp.peoplemedia.com/site/general/pm2515/images/m2.jpg" alt=""/>
                                </Col>
                                <Col xl={4} md={6} xs={12}>
                                    <div className="lower-layer"></div>
                                    <div className="upper-layer">
                                        <h6>David Agbalumo</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab explicabo libero numquam! Aperiam cumque doloribus eaque </p>
                                    </div>
                                    <img src="https://cp.peoplemedia.com/site/general/pm2515/images/m2.jpg" alt=""/>
                                </Col>
                                <Col xl={4} md={6} xs={12}>
                                    <div className="lower-layer"></div>
                                    <div className="upper-layer">
                                        <h6>David Agbalumo</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab explicabo libero numquam! Aperiam cumque doloribus eaque </p>
                                    </div>
                                    <img src="https://cp.peoplemedia.com/site/general/pm2515/images/m2.jpg" alt=""/>
                                </Col>
                            </Row>
                        </section>
                        <section className="want-to">
                            <h4>I want to...</h4>
                            <Row>
                                <Col xl={3} lg={4} md={6} xs={12}>
                                    <button className="btn">Redeem Points</button>
                                </Col>
                                <Col xl={3} lg={4} md={6} xs={12}>
                                    <button className="btn">Invite Friends</button>
                                </Col>
                                <Col xl={3} lg={4} md={6} xs={12}>
                                    <button className="btn">Earn more Points</button>
                                </Col>
                                <Col xl={3} lg={4} md={6} xs={12}>
                                    <button className="btn">Buy Gift Cards</button>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={3} lg={4} md={6} xs={12}>
                                    <button className="btn">View Partner Offers</button>
                                </Col>
                                <Col xl={3} lg={4} md={6} xs={12}>
                                    <button className="btn">View Point History</button>
                                </Col>
                                <Col xl={3} lg={4} md={6} xs={12}>
                                    <button className="btn">Update Account Details</button>
                                </Col>
                            </Row>
                        </section>
                    </div>
                </div>
                <Row className="p-5 footer-row">
                    <Footer />
                </Row>
            </Container>
        );
    }
}


export default Home;
