import React, { Component } from "react";
import { Row, Container, Col, Form, FormGroup, Input, Label } from "reactstrap";
import { Button } from "reactstrap";
import {withRouter} from 'react-router-dom';
import * as actionCreators from '../../actions/index.js';
import { connect } from "react-redux";
import Joi from 'joi-browser';
import Loader from 'react-loader-spinner';
import queryString from 'query-string';

class ForgotConfirmation extends Component {

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
          <h3>Please check your email to reset your password. Also check your SPAM folder if not found in INBOX</h3>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ForgotConfirmation));