import React from 'react';
import {Col} from 'reactstrap';
import './LoginButton.scss';
import  {Link} from 'react-router-dom';
const LoginButton = () => {
    return (
        // Adjust size and offset depending upon the pages and requirement
        <Col key={2} xl={{size: 2, offset: 5}} lg={{size: 2, offset: 4}} md={{size: 2, offset: 3}} sm={{size: 2, offset: 4}} xs={{size: 2, offset: 2}} className="login-button-wrapper">
            <Link to="/login">
                <button className="btn">Login</button>
            </Link>
        </Col>
    );
};

export default LoginButton;
