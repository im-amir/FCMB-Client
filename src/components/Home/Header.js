import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Header.scss';

export default class Navigator extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.handleSelectNavItem = this.handleSelectNavItem.bind(this);
        this.state = {
            isOpen: false,
            activeNavItem: false
        };
    }
    toggle() {
        // Toggle Modal
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    handleSelectNavItem(){
        //    add class to make nav item active
    //    for header
    }
    render() {
        return (
            <Navbar light expand="lg" className="navigatorParentHome">
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar >
                    <Nav navbar style={{ margin: 'auto' }}>
                        <Link to="/components/" onSelect={this.handleSelectNavItem}>
                            <NavItem className="navItem">
                                <NavLink>Pay Bills</NavLink>
                            </NavItem>
                        </Link>
                        <Link to="/gift_cards/">
                            <NavItem className="navItem">
                                <NavLink>Gift Cards</NavLink>
                            </NavItem>
                        </Link>
                        <Link to="/electronics/">
                            <NavItem className="navItem">
                                <NavLink>Electronics</NavLink>
                            </NavItem>
                        </Link>
                        <Link to="/components/">
                            <NavItem className="navItem">
                                <NavLink>Fashion</NavLink>
                            </NavItem>
                        </Link>
                        <Link to="/components/">
                            <NavItem className="navItem">
                                <NavLink>Games</NavLink>
                            </NavItem>
                        </Link>
                        <Link to="/components/">
                            <NavItem className="navItem">
                                <NavLink>Sports</NavLink>
                            </NavItem>
                        </Link>
                        <Link to="/components/">
                            <NavItem className="navItem">
                                <NavLink>Restaurants</NavLink>
                            </NavItem>
                        </Link>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}
