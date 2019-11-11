import React, {Component} from 'react';
import {Row, Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import './OrderHistory.scss';
import OrderView from "./OrderView/OrderView";
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import * as actionCreators from '../../../actions/index.js';

class OrderHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {orderDisplay: false}
    }
    handleClick = () => {
        this.setState({orderDisplay: !this.orderDisplay})
    };


    componentWillMount(){
        console.log(this.props.userAccount);
        this.props.getUserOrders(this.props.userAccount.UserId);
    }

    render() {
        let order = {id: 324234234, status: "Delivered", points: 100, date: "29/09/18"};
        return ([
            <Row className="order-history-wrapper" style={{display: `${this.state.orderDisplay ? 'none': 'block'}`}}>
                <table width="100%">
                    <tr>
                        <th>Order No.</th>
                        <th>Status</th>
                        <th>Points</th>
                        <th>Date</th>
                    </tr>
                    { this.props.userOrders && this.props.userOrders.map(o => (

                        <tr key={o.orderNumber} onClick={this.handleClick}>
                            <td>
                                {o.orderNumber}
                            </td>
                            <td>
                                {o.status}
                            </td>
                            <td>{o.points}</td>
                            <td>{o.dateTime}</td>
                        </tr>
                    ))
                    }
                    <tr>
                        <td colSpan={4}>
                            <Pagination>
                                <PaginationItem>
                                    <PaginationLink className="prev-page" previous href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">
                                        1
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink className="next-page" next href="#" />
                                </PaginationItem>
                            </Pagination>
                        </td>
                    </tr>

                </table>
            </Row>,
                <OrderView orderData={order} orderDisplay={this.state.orderDisplay} />
            ]
        );
    }
}


const mapStateToProps=(state)=>({
    userAccount:state.loggedInUserAccount,
    userOrders: state.userOrders
  })
  
  const mapDispatchToProps = dispatch => {
    return {
        getUserOrders: (userId) => dispatch(actionCreators.getUserOrders(userId))
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(OrderHistory));