import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Col, Form, FormGroup, Input } from 'reactstrap';
import './CreatePasswordCard.scss';
import {Link} from 'react-router-dom';

class CreatePasswordCard extends React.Component{
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
                                <Input type="password" name="password" id="password" placeholder="New Password" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="password" id="password" placeholder="New Password" />
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

export default CreatePasswordCard;
