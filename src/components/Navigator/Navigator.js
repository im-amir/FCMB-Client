import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import { Link,withRouter } from 'react-router-dom';
import {connect} from "react-redux";
import * as actionCreators from './../../actions/index.js';
import './Navigator.scss';

class Navigator extends React.Component {
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
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleSelectNavItem(){
    //    add class to make nav item active
    }
    
    setCategoryId = Id => {
        this.props.setCategoryId(Id);
        this.props.getProductByCategories(Id,this.props.match.params.name);
        this.props.getSubCategoriesByParent(Id,this.props.match.params.name);
    }

    render() {
        console.log(this.props.color)
        return (
            <Navbar light expand="md" className="navigatorParent" style={{background: `${this.props.color}`}} >
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar >
                   {this.props.categories.map(c => (
                        <Nav navbar key={c.Id} style={{ margin: 'auto' }}>
                        <Link to={"/products/"+c.name} onClick={()=>this.setCategoryId(c.Id)}>
                            <NavItem className="navItem">
                                <NavLink>{c.name}</NavLink>
                            </NavItem>
                        </Link>
                        </Nav>
                        ))}
                        {/* <Link to="/gift_cards/">
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
                    </Nav> */}
                </Collapse>
            </Navbar>
        );
    }
}


const mapStateToProps=(state)=>({
    categories:state.categories
  })
  
  const mapDispatchToProps = dispatch => {
    return {
        setCategoryId: (id) => dispatch(actionCreators.setCategoryId(id)),
        getProductByCategories: (id,name) => dispatch(actionCreators.getProductByCategories(id,name)),
        getSubCategoriesByParent: (id,name) => dispatch(actionCreators.getSubCategoriesByParent(id,name))
    }
  }
  
  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Navigator));
  
  
  