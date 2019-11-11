import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Col, Form, FormGroup, Input } from 'reactstrap';
import './CreatePasswordCard.scss';
import {Link,withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import * as actionCreators from '../../../actions/index.js';


class CreatePasswordCard extends React.Component{
    state = {
            userAccount : {
                AccountNumber:"",
                password:"",
                ConfirmPassword:""
            }
        }

    componentDidMount(){
        let userAccount = this.state.userAccount;
        userAccount.AccountNumber = this.props.currentUserAccountNumber;
        this.setState({userAccount});
    }


    componentWillReceiveProps({accountCreated}){
        if (accountCreated) {
            this.props.history.push('/login');
        }
    }

    /* *********************************************** HANDLE INPUT CHANGE EVENT *************************************** */

    handleChange = ({ currentTarget: input }) => {
        // const errors = [...this.state.errors];

        let userAccount = {...this.state.userAccount};
        userAccount[input.name] = input.value;
        this.setState({ userAccount });

        console.log(userAccount);
    };

    createAccount = (e) =>{
        e.preventDefault();
        this.props.createAccount(this.state.userAccount);
    }


    render(){
        return (
            <Col md={{size: 4, offset: 7}} sm={{size: 6, offset: 5}} xs={12} className="password-card-parent-wrapper">
                <Card>
                    <CardBody>
                        <CardTitle>
                            <h2 className="font-weight-bold">Create Password</h2>
                        </CardTitle>
                        <CardSubtitle>
                            <h6>Create a password with minimum of 8 characters</h6>
                        </CardSubtitle>
                        <Form>
                            <FormGroup>
                                <Input type="password" name="password" id="password" onChange={this.handleChange} placeholder="New Password" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="ConfirmPassword" id="ConfirmPassword" onChange={this.handleChange} placeholder="Confirm Password" />
                            </FormGroup>
                            <FormGroup>
                                <button onClick={(e)=>this.createAccount(e)} className="btn form-control">Continue</button>
                            </FormGroup>
                            <Link to="/login">Already a member? Login</Link>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        );
}
};



const mapStateToProps=(state)=>({
    currentUserAccountNumber:state.currentUserAccountNumber,
    accountCreated:state.accountCreated
  })
  
  const mapDispatchToProps = dispatch => {
    return {
        createAccount: (account) => dispatch(actionCreators.createAccount(account))
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(CreatePasswordCard));