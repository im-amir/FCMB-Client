import React, { Component } from "react";
import { Row, Container, Col, Form, FormGroup, Input, Label } from "reactstrap";
import { Button } from "reactstrap";
import {withRouter} from 'react-router-dom';
import * as actionCreators from '../../actions/index.js';
import { connect } from "react-redux";
import Joi from 'joi-browser';
import Loader from 'react-loader-spinner';
import queryString from 'query-string';

class ForgotPassword extends Component {

  state = {
    account : {
      Email:''
  },
    errors:[],
    loginRequestStatus:true,
    loginStatus:true
  }

  schema = {
    Email: Joi.string()
      .required()
      .label("Email")
  };

  handleChange =({currentTarget:input})=>{
    let account = {...this.state.account};

    account[input.name] = input.value;

    this.setState({account});
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.forgotPassword(this.state.account);
  }

  render() {
    
    return (
        <div style={{width:'100%',height:'100vh',verticalAlign:'middle',display:'flex',justifyContent:'center', alignItems:'center',justifyItems:'center'}}>
          <Form style={{margin:'auto',width:'300px',padding:'20px 30px',background:'#fff',boxShadow:'0 0 20px #ccc'} }>
                  <h5>Recover your account</h5>
                  <FormGroup>
                    <Label style={{fontWeight:"normal",fontSize:'12px'}} className="text-muted" for="Email">Enter the email associated with your account</Label>
                    <Input type="text" name="Email" id="Email" onChange={(e)=>this.handleChange(e)} placeholder="Email" />
                    {this.state.errors.Email && (
                      <p className="alert alert-danger">{this.state.errors.Email}</p>
                    )}
                  </FormGroup>

                  <Button onClick={(e)=>this.handleSubmit(e)}
                    style={{
                      width: "100%",
                      height: "40px",
                      backgroundColor: "#641E89",
                      color: "#fff",
                      border: "1px solid white"
                    }} className="btn form-control">
                      Submit
                    {/* {this.state.loginRequestStatus ? "Submit" : 
                    <Loader 
                      type="Puff"
                      color="#FFF"
                      height="30"	
                      width="30"
                    />  } */}
                    </Button>

                </Form>
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
    forgotPassword: (account) => dispatch(actionCreators.forgotPassword(account))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ForgotPassword));