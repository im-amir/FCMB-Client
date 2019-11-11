import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import { Link,withRouter } from 'react-router-dom';
import {connect} from "react-redux";
import * as actionCreators from './../../actions/index.js';
import './Header.scss';

class Navigator extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.handleSelectNavItem = this.handleSelectNavItem.bind(this);
        this.state = {
            isOpen: false,
            activeNavItem: false,
            categories:[]
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
        this.props.getProductByCategories(Id,"");
        this.props.getSubCategoriesByParent(Id,"");
    }

    componentWillMount(){
        this.props.getCategories();
    }

    componentWillReceiveProps(nextProps){
        let categories = nextProps.categories;
        this.setState({categories});
    }

    render() {
        return (
            <Navbar light expand="xl" className="navigatorParentHome">
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar className="home_navbar_collapse">
                        {this.state.categories && this.props.categories.map(c => (
                        <Nav navbar key={c.Id} style={{ margin: 'auto' }}>
                        <Link to={"/products/"+c.name}  onClick={()=>this.setCategoryId(c.Id)} onMouseOver={()=>this.setCategoryId(c.Id)}>
                            <NavItem className="navItem">
                                <NavLink>{c.name}</NavLink>
                            </NavItem>
                        </Link>
                        </Nav>
                        ))}
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
        getCategories: () => dispatch(actionCreators.getCategories()),
        setCategoryId: (id) => dispatch(actionCreators.setCategoryId(id)),
        getProductByCategories: (id,name) => dispatch(actionCreators.getProductByCategories(id,name)),
        getSubCategoriesByParent: (id,name) => dispatch(actionCreators.getSubCategoriesByParent(id,name))
    }
  }

  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Navigator));


