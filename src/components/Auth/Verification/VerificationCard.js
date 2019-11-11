import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Col, Form, FormGroup, Input } from 'reactstrap';
import './VerificationCard.scss';
import {Link,withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import * as actionCreators from '../../../actions/index.js';

class VerificationCard extends React.Component{
    state = {
            pin: "",
        }

        
    /* *********************************************** HANDLE INPUT CHANGE EVENT *************************************** */

    handleChange = ({ currentTarget: input }) => {
        // const errors = [...this.state.errors];
        let pin = input.value;
        this.setState({ pin });
    };

    componentWillReceiveProps({isPINVerified}){
        if (isPINVerified) {
            this.props.history.push('/create_password');
        }
    }

    verifyPIN = (e) => {
        e.preventDefault();
        console.log(this.props.currentUserAccountNumber+"|"+this.state.pin)
        this.props.verifyPIN(this.props.currentUserAccountNumber,this.state.pin);
    }

    
    
    render(){
        return (
            <Col md={{size: 4, offset: 7}} sm={{size: 6, offset: 5}} xs={12} className="verification-card-parent-wrapper">
                <Card>
                    <CardBody>
                        <CardTitle>
                            <h2 className="font-weight-bold">Verification</h2>
                        </CardTitle>
                        <CardSubtitle>
                            <h6>Entered the 6 digit pin sent to the phone number attached to the provided account</h6>
                        </CardSubtitle>
                        <Form>
                            <FormGroup>
                                <Input type="text" name="pin" id="pin" onChange={this.handleChange} placeholder="Enter Pin" />
                            </FormGroup>
                            <FormGroup>
                                <button onClick={(e)=> this.verifyPIN(e)} className="btn form-control">Continue</button>
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
    isPINVerified:state.isPINVerified
  })
  
  const mapDispatchToProps = dispatch => {
    return {
        verifyPIN: (accountNumber,PIN) => dispatch(actionCreators.verifyPIN(accountNumber,PIN))
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(VerificationCard));