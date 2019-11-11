import React, {Component} from 'react';
import {Row, Col, Form, FormGroup, Input, Label} from 'reactstrap';
import {Link,withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import * as actionCreators from './../../../actions/index.js'
import $ from 'jquery';
import './Profile.scss'

class Profile extends Component {

    state = {
        profile : {
            UserId:'',
            name:'',
            email : '',
            mobile:'',
            address:''
        }
    }

    componentDidMount(){
        console.log(this.props.userAccount);
        let profile = {...this.state.profile};
        profile.UserId = this.props.userAccount.Id;

        profile.name = this.props.userAccount.name;
        profile.email = this.props.userAccount.email;
        profile.mobile = this.props.userAccount.mobile;
        profile.address = this.props.userAccount.address;

        this.setState({profile});

        console.log(this.state.profile);
    }

    /* *********************************************** HANDLE INPUT CHANGE EVENT *************************************** */

    handleChange = ({ currentTarget: input }) => {
        // const errors = [...this.state.errors];

        let profile = {...this.state.profile};
        profile[input.name] = input.value;
        this.setState({ profile });

        console.log(profile);
    };


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateProfile(this.state.profile);
    }

    render() {
        return (
            <div className="profile-wrapper">
                <Row>
                    <Col md={8}>
                        <p>Name:</p>
                        <h4>{this.state.profile.name}</h4>
                    </Col>
                    <Col md={4}>
                        <p>Account Number:</p>
                        <p className="account_number">{this.props.userAccount.UserName}</p>
                    </Col>
                </Row>
                <Form>
                    <Row>
                        <Col md={12} xs={12}>
                            <FormGroup>
                                <Label className="text-muted">Full Name</Label>
                                <Input type="text" value={this.state.profile.name} onChange={this.handleChange} name="name" id="name" placeholder="Full Name" />
                            </FormGroup>
                        </Col>
                        <Col md={6} xs={12}>
                            <FormGroup>
                                <Label className="text-muted">Email Address</Label>
                                <Input type="email" value={this.state.profile.email}  onChange={this.handleChange} name="email" id="email" placeholder="someone@email.com" />
                            </FormGroup>
                        </Col>
                        <Col md={6} xs={12}>
                            <FormGroup>
                                <Label className="text-muted">Mobile No.</Label>
                                <Input type="text"  value={this.state.profile.mobile} onChange={this.handleChange}  name="mobile" id="mobile" placeholder="Mobile Number" />
                            </FormGroup>
                        </Col>
                        <Col xs={12}>
                            <Label className="text-muted">House Address</Label>
                            <Input type="text" value={this.state.profile.address} name="address" id="address" onChange={this.handleChange}  placeholder="Full street Address" />
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
                            <button className='btn float-right changePassword' onClick={(e)=> this.handleSubmit(e)} >Save Changes</button>
                        </Col>
                    </Row>
                    <div style={{clear: 'both'}}></div>
                </Form>
            </div>
        );
    }
}


const mapStateToProps=(state)=>({
    userAccount:state.loggedInUserAccount
  })

  const mapDispatchToProps = dispatch => {
    return {
        updateProfile: (user) => dispatch(actionCreators.updateProfile(user))
          }
  }

  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Profile));
