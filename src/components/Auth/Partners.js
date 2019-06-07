import React from 'react';
import {Col} from 'reactstrap';
import './Partners.scss';

const Partners = () => {
    return (
        <Col className="partners-wrapper">
            <h1>Some Partners</h1>
            <p>To be successful you've got to work hard, to make history, simple, you have got to make it. I told you all this before, when you have a swimming pool.</p>
            <div>
                <img src="https://cdn.samsung.com/etc/designs/smg/global/imgs/logo-square-letter.png" alt=""/>
                <img src="https://cdn.samsung.com/etc/designs/smg/global/imgs/logo-square-letter.png" alt=""/>
                <img src="https://cdn.samsung.com/etc/designs/smg/global/imgs/logo-square-letter.png" alt=""/>
                <img src="https://cdn.samsung.com/etc/designs/smg/global/imgs/logo-square-letter.png" alt=""/>
                <img src="https://cdn.samsung.com/etc/designs/smg/global/imgs/logo-square-letter.png" alt=""/>
                <img src="https://cdn.samsung.com/etc/designs/smg/global/imgs/logo-square-letter.png" alt=""/>
            </div>
        </Col>
    );
};

export default Partners;
