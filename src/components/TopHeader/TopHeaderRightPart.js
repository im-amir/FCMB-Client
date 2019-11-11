import React from "react";
import {
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row
} from "reactstrap";
import LoginButton from "./LoginButton";
import ActivateButton from "./ActivateButton";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/index.js";
import "./TopHeaderRightPart.scss";

const style = {
  dropdownItem: {
    padding: "10px",
    borderBottom: "1px solid #dadada",
    background: "#fff"
  }
};
class TopHeaderRightPart extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      dropdownOpenCart: false,
      totalPoints: 0
    };
  }

  componentWillMount() {
    let totalPoints = this.state.totalPoints;
    this.props.cart.OrderItems.filter(
      o => o.userId === this.props.userAccount.Id
    ).forEach(item => {
      totalPoints = totalPoints + parseInt(item.points);
    });

    this.setState({ totalPoints });
  }

  componentWillReceiveProps(nextProps) {
    let userCart = { ...this.state.userCart };
    userCart = nextProps.cart;

    let totalPoints = 0;

    nextProps.cart.OrderItems.filter(
      o => o.userId === this.props.userAccount.Id
    ).forEach(item => {
      totalPoints = totalPoints + parseInt(item.points);
    });

    this.setState({ userCart, totalPoints });
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  toggleCart = () => {
    this.setState(prevState => ({
      dropdownOpenCart: !prevState.dropdownOpenCart
    }));
  };
  handleLogout = () => {
    this.props.logout();
    this.props.history.push("/");
  };
  render() {
    // if user -> true or false
    console.log("Orders", this.props.cart.OrderItems);
    if (this.props.loginStatus) {
      return [
        <Dropdown
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
          style={{ marginTop: "10px" }}
        >
          <Col key={1} style={{ marginTop: "20px" }}>
            <DropdownToggle style={{ all: "unset" }}>
              <img
                src="/images/user.jpg"
                width="40px"
                height="40px"
                style={{ borderRadius: "50%" }}
                className="mr-3"
                alt="User"
              />
              <span className="mr-1">{this.props.userAccount.name}</span>
              <i
                className="fas fa-arrow-down"
                style={{ color: "rgba(227,198,221, 0.7)", fontSize: "10px" }}
              />
            </DropdownToggle>
          </Col>
          <DropdownMenu style={{ padding: "20px" }}>
            <Link to="/account">
              <DropdownItem style={style.dropdownItem}>My Account</DropdownItem>
            </Link>
            <Link to="/account">
              <DropdownItem style={style.dropdownItem}>
                Order History
              </DropdownItem>
            </Link>
            <Link to="/account">
              <DropdownItem style={style.dropdownItem}>
                Point History
              </DropdownItem>
            </Link>
            <button
              onClick={this.handleLogout}
              style={{ padding: "10px 80px", background: "#D8D8D8" }}
              className="btn"
            >
              Logout
            </button>
          </DropdownMenu>
        </Dropdown>,
        <Dropdown
          isOpen={this.state.dropdownOpenCart}
          toggle={this.toggleCart}
          className="dropdown_wrapper"
          style={{ marginTop: "15px" }}
        >
          <Col key={1} style={{ marginTop: "20px" }}>
            <DropdownToggle
              style={{ all: "unset", position: "relative", cursor: "pointer" }}
            >
              <small
                style={{
                  display: "inline-block",
                  color: "#fff",
                  position: "absolute",
                  borderRadius: "50%",
                  textAlign: "center",
                  width: "20px",
                  height: "20px",
                  top: "-5px",
                  right: "5px",
                  zIndex: "999",
                  background: "#641E89",
                  boxShadow: "0 0 4px #aaa",
                  fontWeight: "bold"
                }}
              >
                {
                  this.props.cart.OrderItems.filter(
                    o => o.userId === this.props.userAccount.Id
                  ).length
                }
              </small>
              <i className="fas fa-cart-plus fa-2x mr-3" />
            </DropdownToggle>
          </Col>
          <DropdownMenu
            style={{
              width: "300px",
              height: "auto",
              maxHeight: "60vh",
              overflowX: "hidden",
              overflowY: "auto",
              scrollbarWidth: "thin",
              scrollbarColor: "#dadada",
              padding: "0 0"
            }}
          >
            <div style={{ position: "relative" }}>
              <p
                style={{
                  background: "#F2F2F2",
                  zIndex: 1000,
                  marginTop: "0",
                  position: "sticky",
                  top: "0",
                  padding: "16px",
                  fontSize: "16px",
                  marginBottom: "0",
                  display: "inline-block",
                  width: "100%"
                }}
              >
                My Cart, &emsp;{" "}
                <small className="text-muted">
                  {this.props.cart.OrderItems.length} items
                </small>{" "}
                <span className="close_icon" onClick={this.toggleCart}>
                  X
                </span>
              </p>

              <div className="items-wrapper">
                  {this.props.cart.OrderItems &&
                  this.props.cart.OrderItems.filter(
                      o => o.userId === this.props.userAccount.Id
                  ).map(item => (
                      <DropdownItem style={style.dropdownItem}>
                          <Row>
                              <Col md={5} xs={6}>
                                  <div className="image_wrapper">
                                      <img
                                          width="50"
                                          height="50"
                                          style={{ borderRadius: "7px", objectFit: "cover" }}
                                          // src={`./images/products/${item.image}`}
                                          src={`./images/item.png`}
                                          alt=""
                                          className="img"
                                      />
                                  </div>
                              </Col>
                              <Col md={7} xs={6}>
                                  <small style={{ fontSize: "10px", lineHeight: "4px" }}>
                                      <p>{item.name}</p>
                                      <p
                                          style={{
                                              fontSize: "10px",
                                              fontWeight: "bold",
                                              color: "#641E89"
                                          }}
                                      >
                                          {item.points}pts
                                      </p>
                                      <p>Qty: {item.amount}</p>
                                  </small>
                              </Col>
                          </Row>
                      </DropdownItem>
                  ))}
              </div>
              <div
                style={{
                  background: "#F9F9F9",
                  position: "sticky",
                  width: "100%",
                  bottom: 0
                }}
              >
                <p style={{ padding: "10px 20px 0 20px" }}>
                  <span>Sub-Total </span>{" "}
                  <span style={{ display: "inline-block", float: "right" }}>
                    {this.state.totalPoints}
                  </span>
                </p>
                <div
                  className="cartDropButtons"
                  style={{ padding: "10px 20px", background: "#F2F2F2" }}
                >
                  <Link to="/cart">
                    <button
                      style={{
                        fontSize: "11px",
                        minWidth: "70px",
                        padding: "10px 8px",
                        textTransform: "uppercase",
                        background: "#fff",
                        border: "1px solid #ddd"
                      }}
                    >
                      View Cart
                    </button>
                  </Link>
                  <Link to="/cart">
                    <button
                      style={{
                        float: "right",
                        fontSize: "11px",
                        width: "70px",
                        padding: "5px",
                        textTransform: "uppercase",
                        background: "#A23B8A",
                        color: "#fff",
                        border: "1px solid #ddd"
                      }}
                    >
                      Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </DropdownMenu>
        </Dropdown>
      ];
    } else {
      if (this.props.page === "activate") {
        return <LoginButton />;
      } else if (this.props.page === "login") {
        return <ActivateButton />;
      } else {
        return [
          <LoginButton combined={true} />,
          <ActivateButton combined={true} />
        ];
      }
    }
  }
}

const mapStateToProps = state => ({
  userAccount: state.loggedInUserAccount,
  userExist: state.userExist,
  loginRequestStatus: state.loginRequestStatus,
  loginStatus: state.loginStatus,
  cart: state.cart
});

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actionCreators.logout())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TopHeaderRightPart)
);
