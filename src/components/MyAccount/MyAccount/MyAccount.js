import React, {Component} from 'react';
import { Container, Row, Col, Card,TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import PointBalance from "../PointBalance/PointBalance";
import './MyAccount.scss';
import Summary from "../Summary/Summary";
import PointHistory from "../PointHistory/PointHistory";
import OrderHistory from "../OrderHistory/OrderHistory";
import Profile from "../Profile/Profile";
import SocialAccounts from "../SocialAccounts/SocialAccounts";

class MyAccount extends Component {
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
            <section className="my-account-wrapper">
                <Container>
                    <PointBalance/>
                    <div style={{clear: 'both'}}></div>
                        <Row>
                            <Col md={4} className="account-tabs-selector-col">
                                <Card>
                                    <h3>My Account</h3>
                                    <Nav tabs>
                                        <ul className="verticalNavUL">
                                            <NavItem>
                                                <NavLink onClick={() => { this.toggle('1'); }}>
                                                    <li className={classnames(classnames({ active: this.state.activeTab === '1' }), "sideTab")}
                                                    >Summary</li>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink onClick={() => { this.toggle('2'); }}>
                                                    <li className={classnames({ active: this.state.activeTab === '2' })}
                                                    >Point History</li>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink onClick={() => { this.toggle('3'); }}>
                                                    <li className={classnames({ active: this.state.activeTab === '3' })}>Order History</li>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink style={{all: 'unset'}}
                                                         onClick={() => { this.toggle('4'); }}>
                                                    <li className={classnames({ active: this.state.activeTab === '4' })}>Profile</li>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink onClick={() => { this.toggle('5'); }}>
                                                    <li className={classnames({ active: this.state.activeTab === '5' })}>Social Accounts</li>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink onClick={() => { this.toggle('6'); }}>
                                                    <li className={classnames({ active: this.state.activeTab === '6' })}>Logout</li>
                                                 </NavLink>
                                            </NavItem>
                                        </ul>
                                    </Nav>
                                </Card>
                            </Col>
                            <Col md={8} style={{ padding: '17px'}}>
                                {/*Tabs Content*/}

                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                        <Summary/>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <PointHistory/>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <OrderHistory />
                                    </TabPane>
                                    <TabPane tabId="4">
                                        <Profile/>
                                    </TabPane>
                                    <TabPane tabId="5">
                                        <SocialAccounts/>
                                    </TabPane>
                                    <TabPane tabId="6">
                                        <h1>Logout</h1>
                                    </TabPane>
                                </TabContent>
                            </Col>
                        </Row>
                </Container>
            </section>
        );
    }
}


export default MyAccount;
