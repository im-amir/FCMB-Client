import React from 'react';
import {Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import LoginButton from './LoginButton';
import ActivateButton from './ActivateButton';

const style = {
    dropdownItem: {
        padding: '10px'
    }
};
class TopHeaderRightPart extends React.Component{
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        // if user -> true or false
        if (false) {
            return ([
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <Col key={1} style={{marginTop: '20px'}}>
                                <DropdownToggle style={{all: 'unset'}}>
                                    <img src="/images/user.jpg" width="40px" height="35px" style={{borderRadius: '50%'}}
                                         className="mr-3" alt="User"/>
                                    <span className="mr-1">Agbalumo</span>
                                    <i className="fas fa-arrow-down"
                                       style={{color: 'rgba(227,198,221, 0.7)', fontSize: '10px'}}></i>
                                </DropdownToggle>
                            </Col>
                        <DropdownMenu style={{padding: '20px'}}>
                            <DropdownItem style={style.dropdownItem}>My Account</DropdownItem>
                            <DropdownItem style={style.dropdownItem}>Order History</DropdownItem>
                            <DropdownItem style={style.dropdownItem}>Point History</DropdownItem>
                            <DropdownItem style={style.dropdownItem}>Wishlists</DropdownItem>
                            <button style={{padding: '10px 80px', background: '#D8D8D8'}} className="btn">Logout</button>
                        </DropdownMenu>
                    </Dropdown>
                    ,
                    <Col key={2} style={{marginTop: '20px'}}>
                        <i className="fas fa-cart-plus fa-2x"></i>
                    </Col>
                ]
            );
        } else {
            return ([
                    <LoginButton />,
                    <ActivateButton />
                ]
            );
        }
    }
};

export default TopHeaderRightPart;
