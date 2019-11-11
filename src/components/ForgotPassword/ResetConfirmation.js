import React, { Component } from "react";
import {withRouter, Link} from 'react-router-dom';
import * as actionCreators from '../../actions/index.js';
import { connect } from "react-redux";
import Joi from 'joi-browser';
import queryString from 'query-string';

class ResetConfirmation extends Component {

  state = {
    account : {
      Email:'',
      Password:''
  },
    errors:[],
    loginRequestStatus:true,
    loginStatus:true
  }

  schema = {
    Email: Joi.string()
      .required()
      .label("Email"),
    Password: Joi.string()
      .label("Password")
      .required()
  };


  componentDidMount(){
      let id = queryString.parse(this.props.location.search).userId;
      console.log(id);
      let code = queryString.parse(this.props.location.search).code;
      console.log(code);
  }

  render() {
    
    return (
        <div style={{width:'100%',height:'100vh',verticalAlign:'middle',display:'flex',justifyContent:'center', alignItems:'center',justifyItems:'center'}}>
          <h3>Your Password has been Reset, please <Link to="/login"> click here to Login</Link></h3>
        </div>
    );
  }
}


const mapStateToProps = (state) => ({
  userExist:state.userExist,
  loginRequestStatus:state.loginRequestStatus,
  loginStatus:state.loginStatus
})

const mapDispatchToProps = dispatch => {
  return {
    login: (account) => dispatch(actionCreators.login(account))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResetConfirmation));