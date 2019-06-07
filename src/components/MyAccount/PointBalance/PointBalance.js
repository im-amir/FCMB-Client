import React from 'react';
import './PointBalance.scss';

const PointBalance = () => {
    return (
        <div className="pointBalanceWrapper">
            <div className="pointBalanceText">Point Balance: </div>
            <span className="h5 pointBalance">100,000pts</span>
        </div>
    );
};

export default PointBalance;
