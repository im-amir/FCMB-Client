import React from 'react';
import {Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import './ActivateButton.scss';
const style = {
    activateBtn: {
        backgroundColor: '#A23B8A',
        color: 'white',
        padding: '5px 40px 10px 40px',
        marginTop: '15px'
    },
}
const ActivateButton = () => {
    return (
        <Col key={3} xs={{size: 2, offset: 0}} className="activate-button-wrapper">
            <Link to="/activate">
                <button className="btn" style={style.activateBtn}>Activate</button>
            </Link>
        </Col>
    );
};

export default ActivateButton;
