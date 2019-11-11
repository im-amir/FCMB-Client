import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import Login from "./components/Auth/Login/";
import Activate from "./components/Auth/Activate/";
import Verify from "./components/Auth/Verification/";
import Cart from "./components/Cart/";
import MyAccount from "./components/MyAccount/";
import SendToFriend from "./components/GiftCards/GiftCardView/";
import ProductView from "./components/GiftCards/ProductView";
import Products from "./components/Products";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword.js";
import ResetPassword from "./components/ForgotPassword/ResetPassword";
import ForgotConfirmation from "./components/ForgotPassword/ForgotConfirmation";
import ResetConfirmation from "./components/ForgotPassword/ResetConfirmation";
import EmailConfirmed from "./components/EmailConfirm/EmailConfirmed";
import PurchasePoints from "./components/purchase/purchasePoints.js";
import Home from "./components/Home/";
import CreatePassword from "./components/Auth/CreatePassword/";
import CartLowPoints from "./components/Cart/CardLowPoints/CartLowPoints";
import { connect } from "react-redux";
import * as actionCreators from "./actions/index.js";
import "./App.scss";

class App extends Component {
  componentWillMount() {
    this.props.getCategories();
    this.props.getAllProducts();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/activate" component={Activate} />
          <Route exact path="/verify" component={Verify} />{" "}
          <Route exact path="/create_password" component={CreatePassword} />{" "}
          <Route exact path="/cart" component={Cart} />{" "}
          <Route path="/complete_order" component={CartLowPoints} />{" "}
          <Route exact path="/account" component={MyAccount} />{" "}
          <Route path="/gift_cards/:name" component={ProductView} />{" "}
          <Route path="/send_to_friend" component={SendToFriend} />
          <Route path="/purchase" exact component={PurchasePoints} />
          <Route exact path="/products/:name" component={Products} />
          <Route exact path="/forgot" component={ForgotPassword} />
          <Route exact path="/reset" component={ResetPassword} />
          <Route exact path="/forgotConfirm" component={ForgotConfirmation} />
          <Route exact path="/resetConfirm" component={ResetConfirmation} />
          <Route exact path="/emailConfirm" component={EmailConfirmed} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  userData: state.loggedInUserAccount
});

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(actionCreators.getCategories()),
    getAllProducts: () => dispatch(actionCreators.getAllProducts())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
