import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Col, Form, FormGroup, Input } from 'reactstrap';
import './VerificationCard.scss';
import {Link} from 'react-router-dom';

class ActivateCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pin: "",
        }
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
                                <Input type="text" name="pin" id="pin" placeholder="Enter Pin" />
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
