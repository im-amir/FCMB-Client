import React, { Component } from "react";
import "../Auth/Activate/Index.scss";
import "./Index.scss";
import Navigator from "../Navigator/Navigator";
import { Container, Row, Col } from "reactstrap";
import TopHeaderIndex from "../TopHeader/index";
import Footer from "../Footer/Footer";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import * as actionCreators from "./../../actions/index.js";
import Products from "./Products";

class Index extends Component {
  state = {
    domLoading: true
  };

  componentDidMount() {
    this.handleLoad();
  }

  handleLoad() {
    this.setState({ domLoading: false });
  }

  render() {
    return this.state.domLoading ? (
      <div
        style={{
          height: "100vh",
          justifyContent: "center",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          zIndex: "200",
          position: "absolute",
          width: "100%"
        }}
      >
        <Loader type="Puff" color="#333" height="100" width="100" />
      </div>
    ) : (
      <Container fluid={true} className="container-parent">
        <Container className="header-container" fluid>
          <Row className="p-3">
            <TopHeaderIndex />
          </Row>
        </Container>
        <Row>
          <Col xs={12}>
            <Navigator />
          </Col>
        </Row>
        <Row className="electronics-header-row">
          <Col style={{ background: "rgba(0,0,0,0.5)" }}>
            <h1>Products</h1>
            <p>
              It's important to use cocoa butter. It's the key to more success,
              why not live smooth? Why live rough? Surround yourself with
              angels,
            </p>
          </Col>
        </Row>
        <Products />
        <Row className="p-5 footer-row">
          <Footer />
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  userAccount: state.loggedInUserAccount,
  products: state.products
});

const mapDispatchToProps = dispatch => {
  return {};
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Index)
);
