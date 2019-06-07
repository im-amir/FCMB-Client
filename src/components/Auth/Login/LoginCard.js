import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Col, Form, FormGroup, Input } from 'reactstrap';
import './LoginCard.scss';
import {Link} from 'react-router-dom';


class LoginCard extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Col md={{size: 4, offset: 7}} sm={{size: 6, offset: 5}} xs={12} className="login-card-parent-wrapper">
                <Card>
                    <CardBody>
                        <CardTitle>
                            <h2 className="font-weight-bold">LOGIN</h2>
                        </CardTitle>
                        <CardSubtitle>
                            <h6 className="text-muted">Entered your registered account number and password</h6>
                        </CardSubtitle>
                        <Form>
                            <FormGroup>
                                <Input type="text" name="account" id="account" placeholder="Account No." />
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="password" id="password" placeholder="Password" />
                            </FormGroup>
                            <Link to="forgot_pass">Forgot Password?</Link>
                            <FormGroup>
                                <button className="btn form-control">Login</button>
                            </FormGroup>
                            <Link to="/activate">Not a member yet? Activate</Link>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        );
}
};

export default LoginCard;
