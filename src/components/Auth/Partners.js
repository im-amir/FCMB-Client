import React from 'react';
import {Col} from 'reactstrap';
import './Partners.scss';

const Partners = () => {
    return (
        <Col className="partners-wrapper">
            <h3>Some Partners</h3>
            <p className="text-muted">To be successful you've got to work hard, to make history, simple, you have got to make it. I told you all this before, when you have a swimming pool.</p>
            <div>
                <img src="https://cdn.samsung.com/etc/designs/smg/global/imgs/logo-square-letter.png" alt=""/>
                <img src="https://pbs.twimg.com/profile_images/916330544945926144/gIWePpVN_400x400.jpg" alt=""/>
                <img src="https://cdn.samsung.com/etc/designs/smg/global/imgs/logo-square-letter.png" alt=""/>
                <img src="https://pbs.twimg.com/profile_images/916330544945926144/gIWePpVN_400x400.jpg" alt=""/>
                <img src="https://cdn.samsung.com/etc/designs/smg/global/imgs/logo-square-letter.png" alt=""/>
            </div>
        </Col>
    );
};

export default Partners;
