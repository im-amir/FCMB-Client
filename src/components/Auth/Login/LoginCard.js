import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Col, Form, FormGroup, Input } from 'reactstrap';
import './LoginCard.scss';
import {Link,withRouter} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import {connect} from "react-redux";
import * as actionCreators from '../../../actions/index.js';
import Joi from 'joi-browser';


class LoginCard extends React.Component{
    state = {
        account : {
            Email:'',
            Password:''
        },
        errors:[]
    }

    schema = {
        Email: Joi.string()
          .required()
          .label("Email"),
        Password: Joi.string()
          .label("Password")
          .required()
      };

      componentWillReceiveProps({userExist}){
        if (userExist) {
            this.props.history.push('/account');
        }
    }
    componentWillMount(){
        if (this.props.userExist) {
            this.props.history.push('/account');
        }
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

    login = (e) =>{
        e.preventDefault();
        const errors = this.validate();

        this.setState({ errors: errors || {} });
        if (!errors) {
        this.props.login(this.state.account);
        }

    }


    render(){
        
        return (
            <Col md={{size: 4, offset: 7}} sm={{size: 6, offset: 5}} xs={12} className="login-card-parent-wrapper">
                <Card>
                    <CardBody>
                        <CardTitle>
                            <h3 className="font-weight-bold">LOGIN</h3>
                        </CardTitle>
                        <CardSubtitle>
                            <h6 className="text-muted">Entered your registered account number and password</h6>
                        </CardSubtitle>
                        <Form>
                            <FormGroup>
                                <Input type="text" name="Email" id="Email" onChange={this.handleChange} placeholder="Account No." />
                                {this.state.errors.Email && (
                                    <p className="alert alert-danger">{this.state.errors.Email}</p>
                                )}
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="Password" id="Password" onChange={this.handleChange} placeholder="Password" />
                                {this.state.errors.Password && (
                                    <p className="alert alert-danger">{this.state.errors.Password}</p>
                                )}
                            </FormGroup>
                            <Link to="/forgot">Forgot Password?</Link>
                            <FormGroup>
                                <button onClick={(e)=>this.login(e)} className="btn form-control">{this.props.loginRequestStatus ? "Login" : <Loader 
                                    type="Puff"
                                    color="#FFF"
                                    height="50"	
                                    width="50"
                                />  }</button>
                            </FormGroup>
                            <Link to="/activate">Not a member yet? Activate</Link>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        );
}
};



const mapStateToProps=(state)=>({
    userExist:state.userExist,
    loginRequestStatus:state.loginRequestStatus
  })
  
  const mapDispatchToProps = dispatch => {
    return {
        login: (account) => dispatch(actionCreators.login(account))
    }
  }
  
  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(LoginCard));