import React from 'react';
import { connect } from "react-redux";
import './PointBalance.scss';

class PointBalance extends React.Component {
    render() {

        return (
            <div className="pointBalanceWrapper">
                <div className="pointBalanceText">Point Balance: </div>
                <span className="h5 pointBalance">{this.props.userAccount.balance == null ? "0 pts": `${this.props.userAccount.balance} pts`}</span>
            </div>
        );
    }
};



const mapStateToProps = (state) => ({
    userAccount: state.loggedInUserAccount
})

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(PointBalance));

