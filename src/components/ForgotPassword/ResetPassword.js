import React, { Component } from "react";
import { Row, Container, Col, Form, FormGroup, Input, Label } from "reactstrap";
import { Button } from "reactstrap";
import {withRouter} from 'react-router-dom';
import * as actionCreators from '../../actions/index.js';
import { connect } from "react-redux";
import Joi from 'joi-browser';
import Loader from 'react-loader-spinner'
import queryString from 'query-string'

class ResetPassword extends Component {

  state = {
    account : {
      Email:'',
      Password:'',
      ConfirmPassword:'',
      Code:''
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
      .required(),
    ConfirmPassword: Joi.string().label('Confirm Password').required(),
    Code: Joi.any().allow('',null)  };

  componentDidMount(){
    let code = queryString.parse(this.props.location.search).code;
    let code2 = queryString.parseUrl(this.props.location.search);
    code = code.replace(/\s+/g,'+')
    let account = {...this.state.account}
    account.Code = code;
    alert(code);
    console.log(code2)
    this.setState({account}) 
  }

  componentWillReceiveProps(nextProps){
    
    this.setState({loginRequestStatus:nextProps.loginRequestStatus, loginStatus:nextProps.loginStatus})
  }

  validateProperty(input) {
    const obj = { [input.name]: input.value };
    const schema = { [input.name]: this.schema[input.name] };
    const { error } = Joi.validate(obj, schema);
    if (!error) return null;
    return error.details[0].message;
  }

  /* *********************************************** HANDLE INPUT CHANGE EVENT *************************************** */

  validate = () => {
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false
    });
    if (!result.error) return null;

    const errors = [];

    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = [...this.state.errors];
    
    const errorMessage = this.validateProperty(input);

    if (errorMessage) 
      errors[input.name] = errorMessage;
    else 
      delete errors[input.name];

    const account = { ...this.state.account };

    account[input.name] = input.value;
    this.setState({ account, errors });

  };

  
  handleSubmit =async e =>{
    e.preventDefault();
    this.setState({loginRequestStatus:false})
    const errors = this.validate();

    if (!errors) {
      await this.props.resetPassword(this.state.account);
    }
    // if (this.props.loginStatus) {
      // }
    this.setState({ errors: errors || {} });
  }

  render() {
    
    return (
              <div style={{width:'100%',height:'100vh',verticalAlign:'middle',display:'flex',justifyContent:'center', alignItems:'center',justifyItems:'center'}}>
                <Form style={{margin:'auto',width:'300px',padding:'20px 30px',background:'#fff',boxShadow:'0 0 20px #ccc'} }>
                  <h5>Reset your password</h5>
                  <FormGroup>
                    <Label style={{fontWeight:"normal",fontSize:'12px'}} className="text-muted" for="Email">Email</Label>
                    <Input type="text" name="Email" id="Email" onChange={(e)=>this.handleChange(e)} placeholder="Email" />
                    {this.state.errors.Email && (
                      <p className="alert alert-danger">{this.state.errors.Email}</p>
                    )}
                  </FormGroup>
                  
                  <FormGroup>
                    <Label style={{fontWeight:"normal",fontSize:'12px'}} className="text-muted" for="Password">Password</Label>
                    <Input type="Password" name="Password" id="Password" onChange={(e)=>this.handleChange(e)} placeholder="Password" />
                    {this.state.errors.Password && (
                      <p className="alert alert-danger">{this.state.errors.Password}</p>
                    )}
                  </FormGroup>
                  
                    <FormGroup>
                        <Label style={{fontWeight:"normal",fontSize:'12px'}} className="text-muted" for="Password">Password</Label>
                        <Input type="Password" name="ConfirmPassword" id="ConfirmPassword" onChange={(e)=>this.handleChange(e)} placeholder="ConfirmPassword" />
                        {this.state.errors.ConfirmPassword && (
                        <p className="alert alert-danger">{this.state.errors.ConfirmPassword}</p>
                        )}
                    </FormGroup>
                    

                  {/* <p style={{color:'#641E89',textDecoration:'underline', cursor:'pointer'}}>Forgot Password ?</p> */}
                  <Button onClick={(e)=>this.handleSubmit(e)}
                    style={{
                      width: "100%",
                      height: "40px",
                      backgroundColor: "#641E89",
                      color: "#fff",
                      border: "1px solid white"
                    }} className="btn form-control">
                    Reset
                    {/* {this.state.loginRequestStatus ? "Reset" : 
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
    resetPassword: (account) => dispatch(actionCreators.resetPassword(account))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResetPassword));