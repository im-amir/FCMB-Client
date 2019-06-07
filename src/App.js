import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Auth/Login/'
import Activate from './components/Auth/Activate/'
import Verify from './components/Auth/Verification/'
import Cart from "./components/Cart/";
import MyAccount from "./components/MyAccount/";
import SendToFriend from "./components/GiftCards/GiftCardView/";
import ProductView from "./components/GiftCards/ProductView";
import Electronics from "./components/Electronics/";
import Home from "./components/Home/";
import CreatePassword from "./components/Auth/CreatePassword/";
import CartLowPoints from "./components/Cart/CardLowPoints/CartLowPoints";

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/activate" component={Activate} />
                <Route path="/verify" component={Verify} />
                <Route path="/create_password" component={CreatePassword} />
                <Route path="/cart" component={Cart} />
                <Route path="/complete_order" component={CartLowPoints} />
                <Route path="/account" component={MyAccount} />
                <Route path="/gift_cards" component={ProductView} />
                <Route path="/send_to_friend" component={SendToFriend} />
                <Route path="/electronics" component={Electronics} />
            </div>
        </Router>
    );
  }
}
export default App;
