import React from 'react';
import {Col} from 'reactstrap';
import './LoginButton.scss';
import  {Link} from 'react-router-dom';
const LoginButton = (props) => {
    return (
        // Adjust size and offset depending upon the pages and requirement
        <span key={2} className="login-button-wrapper" style={{marginRight: props.combined ? "0": '60px'}}>
            <Link to="/login">
                <button className="btn">Login</button>
            </Link>
        </span>
    );
};

export default LoginButton;
