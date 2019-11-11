import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Col, Form, FormGroup, Input } from 'reactstrap';
import './ActivateCard.scss';
import {Link,withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import * as actionCreators from '../../../actions/index.js';

class ActivateCard extends React.Component{
    state = {
       radioBtnType: "account",
       accountNumber:""
    }

    handleRadio(type) {
        this.setState({radioBtnType: type})

    };


    /* *********************************************** HANDLE INPUT CHANGE EVENT *************************************** */

    handleChange = ({ currentTarget: input }) => {
        // const errors = [...this.state.errors];
        let accountNumber = input.value;
        this.setState({ accountNumber });
    };


  componentWillReceiveProps({isAccountExist}){
    if (isAccountExist) {
        this.props.history.push('/verify');
    }
  }

  verifyAccountNumber = () => {
    this.props.checkAccount(this.state.accountNumber);
  }

    render(){
        return (
            <Col md={{size: 4, offset: 7}} sm={{size: 6, offset: 5}} xs={12} className="activate-card-parent-wrapper">
                <Card>
                    <CardBody>
                        <CardTitle>
                            <h3 className="font-weight-bold">Activation</h3>
                        </CardTitle>
                        <CardSubtitle>
                            <h6>Enter your FCBM account no. or debit/credit to activate
                                your membership</h6>
                        </CardSubtitle>
                        <Form>
                            <FormGroup>
                                <span className="account-radio-btn">
                                    <div>
                                        <span onClick={() => this.handleRadio("account")} className={this.state.radioBtnType === "account" ? "clicked" : "notClicked" }> </span>
                                    </div>
                                    <label htmlFor="">Account No.</label>
                                </span>
                                <span className="debit-radio-btn">
                                    <div>
                                        <span onClick={() => this.handleRadio("card")} className={this.state.radioBtnType === "account" ? "notClicked" : "clicked" }> </span>
                                    </div>
                                    <label htmlFor="">Debit/Credit Card</label>
                                </span>
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" name="credential" id="credential" onChange={this.handleChange} placeholder={this.state.radioBtnType === "account" ? "Account No.": "Debit/Credit Card"} />
                            </FormGroup>
                            <FormGroup>
                                <button type="button" onClick={()=>this.verifyAccountNumber()} className="btn form-control">Continue</button>
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
    isAccountExist:state.isAccountExist
  })

  const mapDispatchToProps = dispatch => {
    return {
        checkAccount: (accountNumber) => dispatch(actionCreators.checkAccount(accountNumber))
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ActivateCard));
