import React, {Component} from 'react';
import {Row, Col, Form, FormGroup, Input, Label} from 'reactstrap';
import {Link} from 'react-router-dom';
import './Profile.scss'

class Profile extends Component {
    render() {
        return (
            <div className="profile-wrapper">
                <Row>
                    <Col md={8}>
                        <p>Name:</p>
                        <h4>James Agbalumo</h4>
                    </Col>
                    <Col md={4}>
                        <p>Account Number:</p>
                        <h4>0023456789</h4>
                    </Col>
                </Row>
                <Form>
                    <Row>
                        <Col md={6} xs={12}>
                            <FormGroup>
                                <Label className="text-muted">Email Address</Label>
                                <Input type="email" name="email" id="email" placeholder="hashlogics@gmail.com" />
                            </FormGroup>
                        </Col>
                        <Col md={6} xs={12}>
                            <FormGroup>
                                <Label className="text-muted">Mobile No.</Label>
                                <Input type="text" name="number" id="number" placeholder="0843232323" />
                            </FormGroup>
                        </Col>
                        <Col xs={12}>
                            <Label className="text-muted">House Address</Label>
                            <Input type="text" name="number" id="number" placeholder="28, King Okonosdood Street, Lahore, Pakistan" />
                        </Col>
                    </Row>
                    <Row>
                        <h6 className="text-muted mt-auto mb-auto">Change Password</h6>
                    </Row>
                    <Row>
                        <Col md={6} xs={12}>
                            <FormGroup>
                                <Label className="text-muted">Current Password</Label>
                                <Input type="password" name="current_pass" id="current_pass"/>
                            </FormGroup>
                        </Col>
                        <Col md={6} xs={12}>
                            <FormGroup>
                                <Label className="text-muted">New Password</Label>
                                <Input type="password" name="new_pass" id="new_pass"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Link className='btn float-right changePassword' to="/link_account">Save Changes</Link>
                        </Col>
                    </Row>
                    <div style={{clear: 'both'}}></div>
                </Form>
            </div>
        );
    }
}

export default Profile;
