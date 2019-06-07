import React, {Component} from 'react';
import {Row, Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import './OrderHistory.scss';
import OrderView from "./OrderView/OrderView";

class OrderHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {orderDisplay: false}
    }
    handleClick = () => {
        this.setState({orderDisplay: !this.orderDisplay})
    };
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
                    <tr onClick={this.handleClick}>
                        <td>
                            #324234234
                        </td>
                        <td>
                            Delivered
                        </td>
                        <td>100pts</td>
                        <td>29/09/18</td>
                    </tr>
                    <tr>
                        <td>
                            #324234234
                        </td>
                        <td>
                            Delivered
                        </td>
                        <td>100pts</td>
                        <td>29/09/18</td>
                    </tr>
                    <tr>
                        <td>
                            #324234234
                        </td>
                        <td>
                            Cancelled
                        </td>
                        <td>100pts</td>
                        <td>29/09/18</td>
                    </tr>
                    <tr>
                        <td>
                            #324234234
                        </td>
                        <td>
                            Delivered
                        </td>
                        <td>100pts</td>
                        <td>29/09/18</td>
                    </tr>
                    <tr>
                        <td>
                            #324234234
                        </td>
                        <td>
                            Delivered
                        </td>
                        <td>100pts</td>
                        <td>29/09/18</td>
                    </tr>
                    <tr>
                        <td>
                            #324234234
                        </td>
                        <td>
                            Delivered
                        </td>
                        <td>100pts</td>
                        <td>29/09/18</td>
                    </tr>
                    <tr>
                        <td>
                            #324234234
                        </td>
                        <td>
                            Delivered
                        </td>
                        <td>200pts</td>
                        <td>29/09/18</td>
                    </tr>
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
                                    <PaginationLink href="#">
                                        2
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">
                                        3
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">
                                        4
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">
                                        5
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


export default OrderHistory;
