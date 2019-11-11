import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../../actions/index.js";
import "./Summary.scss";

class Summary extends Component {
  componentDidMount() {}
  render() {
    const balance = this.props.userAccount.balance;
    const redeemed = this.props.userAccount.redeemed;
    const total = this.props.userAccount.total;
    return (
      <div className="summary-wrapper">
        <Row>
          <Col md={8}>
            <p>Name :</p>
            <h4>{this.props.userAccount.name}</h4>
          </Col>
          <Col md={4}>
            <p>Account Number:</p>
            <p className="account_number">
              {this.props.userAccount.UserName === "" ? (
                <h4> </h4>
              ) : (
                this.props.userAccount.UserName
              )}
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={3} xs={12}>
            <small>Total Points</small>
            <h2
              style={{ fontSize: total && total.toString().length > 5 ? "16px" : "" }}
            >
              {total}pts
            </h2>
          </Col>
          <Col md={3} xs={12}>
            <small>Redeemed Points</small>
            <h2
              style={{
                color: "#ffb602",
                fontSize: redeemed && redeemed.toString().length > 5 ? "16px" : ""
              }}
            >
              {redeemed}pts
            </h2>
          </Col>
          <Col md={3} xs={12}>
            <small>Balance Points</small>
            <h2
              style={{ fontSize: balance && balance.toString().length > 5 ? "16px" : "" }}
            >
              {balance}pts
            </h2>
          </Col>
        </Row>
        <Row>
          <h4>Earnings</h4>
        </Row>
        <div className="earnings">
          <Row>
            <Col md={3} xs={12}>
              <h5>Bonus Points</h5>
            </Col>
            <Col md={3} xs={12}>
              <h5>{this.props.userAccount.bonus}pts</h5>
            </Col>
          </Row>
          <Row>
            <Col md={3} xs={12}>
              <h5>Spend Points</h5>
            </Col>
            <Col md={3} xs={12}>
              <h5>{this.props.userAccount.spend}pts</h5>
            </Col>
          </Row>
          <Row>
            <Col md={3} xs={12}>
              <h5>Purchased Points</h5>
            </Col>
            <Col md={3} xs={12}>
              <h5>{this.props.userAccount.purchased}pts</h5>
            </Col>
          </Row>
          <Row className="last-row">
            <Col md={{ size: 5, offset: 2 }} xs={{ size: 12, offset: 0 }}>
              <p>Have another FCMB account?</p>
            </Col>
            <Col md={5} xs={12}>
              <Link className="btn" to="/link_account">
                Link another account
              </Link>
            </Col>
          </Row>
          <div style={{ clear: "both" }} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userAccount: state.loggedInUserAccount
});

const mapDispatchToProps = dispatch => {
  return {};
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Summary)
);
