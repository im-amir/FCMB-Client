import React from 'react';
import {Col} from 'reactstrap';
import './Footer.scss'

const Footer = () => {
    return ([
            <Col md={{size: 4, offset: 1}} xs={12} className="footer-col-1">
                <h6>Follow Us</h6>
                <i className="fab fa-facebook fa-3x pr-3"></i>
                <i className="fab fa-twitter-square fa-3x pr-3"></i>
                <i className="fab fa-instagram fa-3x"></i>
            </Col>,
            <Col md={3} xs={12} className="footer-col-2">
                <h6>Quick Links</h6>
                <p>FAQs</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Contact Us</p>
            </Col>,
            <Col md={4} xs={12} className="footer-col-3">
                <h6>Powered by</h6>
                <h1>suregifts</h1>
            </Col>
        ]
    );
};

export default Footer;
