import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Col, Form, FormGroup, Input } from 'reactstrap';
import './ActivateCard.scss';
import {Link} from 'react-router-dom';

class ActivateCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            radioBtnType: "account",
        }
    }

    handleRadio(type) {
        this.setState({radioBtnType: type})

    };

    render(){
        return (
            <Col md={{size: 4, offset: 7}} sm={{size: 6, offset: 5}} xs={12} className="activate-card-parent-wrapper">
                <Card>
                    <CardBody>
                        <CardTitle>
                            <h2 className="font-weight-bold">Activation</h2>
                        </CardTitle>
                        <CardSubtitle>
                            <h6>Entered your FCBM account no. or debit/credit to activate
                                your membership</h6>
                        </CardSubtitle>
                        <Form>
                            <FormGroup>
                                <span className="account-radio-btn">
                                    <span onClick={() => this.handleRadio("account")} className={this.state.radioBtnType === "account" ? "clicked" : "notClicked" }> </span>
                                    <label htmlFor="">Account No.</label>
                                </span>
                                <span className="debit-radio-btn">
                                    <span onClick={() => this.handleRadio("card")} className={this.state.radioBtnType === "account" ? "notClicked" : "clicked" }> </span>
                                    <label htmlFor="">Debit/Credit Card</label>
                                </span>
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" name="credential" id="credential" placeholder={this.state.radioBtnType === "account" ? "Account No.": "Debit/Credit Card"} />
                            </FormGroup>
                            <FormGroup>
                                <button className="btn form-control">Continue</button>
                            </FormGroup>
                            <Link to="/login">Already a member? Login</Link>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        );
}
};

export default ActivateCard;
