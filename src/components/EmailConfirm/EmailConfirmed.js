import React, { Component } from "react";
import {withRouter, Link} from 'react-router-dom';
import * as actionCreators from '../../actions/index.js';
import { connect } from "react-redux";


class EmailConfirmed extends Component {
  componentDidMount(){
      
  }

  render() {
    
    return (
        <div style={{width:'100%',height:'100vh',verticalAlign:'middle',display:'flex',justifyContent:'center', alignItems:'center',justifyItems:'center'}}>
          <h3 style={{textAlign:"center"}}>Your Email has been confirmed <br/> <Link to="/"> <button className="btn btn-primary">Back to Home</button></Link></h3>
        </div>
    );
  }
}


const mapStateToProps = (state) => ({
  userExist:state.userExist,
  loginRequestStatus:state.loginRequestStatus,
  loginStatus:state.loginStatus
})

const mapDispatchToProps = dispatch => {
  return {
    login: (account) => dispatch(actionCreators.login(account))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EmailConfirmed));