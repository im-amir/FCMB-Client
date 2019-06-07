import React, {Component} from 'react';
import {Row, Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import './PointHistory.scss';

class PointHistory extends Component {
    render() {
        return (
            <Row className="point-history-wrapper">
                <table width="100%">
                    <tr>
                        <th>Activity</th>
                        <th>Type</th>
                        <th>Points</th>
                        <th>Date</th>
                    </tr>
                    <tr>
                        <td>
                            ATM Withdrawal
                        </td>
                        <td>
                            Credit
                        </td>
                        <td>100pts</td>
                        <td>29/09/18</td>
                    </tr>
                    <tr>
                        <td>
                            ATM Withdrawal
                        </td>
                        <td>
                            Credit
                        </td>
                        <td>100pts</td>
                        <td>29/09/18</td>
                    </tr>
                    <tr>
                        <td>
                            POS Machine
                        </td>
                        <td>
                            Credit
                        </td>
                        <td>100pts</td>
                        <td>29/09/18</td>
                    </tr>
                    <tr>
                        <td>
                            Air Time Topup - 123456789
                        </td>
                        <td>
                            Credit
                        </td>
                        <td>100pts</td>
                        <td>29/09/18</td>
                    </tr>
                    <tr>
                        <td>
                            ATM Withdrawal
                        </td>
                        <td>
                            Credit
                        </td>
                        <td>100pts</td>
                        <td>29/09/18</td>
                    </tr>
                    <tr>
                        <td>
                            Gift Card Order - #34235234
                        </td>
                        <td>
                            Credit
                        </td>
                        <td>100pts</td>
                        <td>29/09/18</td>
                    </tr>
                    <tr>
                        <td>
                            ATM Withdrawal
                        </td>
                        <td>
                            Credit
                        </td>
                        <td>100pts</td>
                        <td>29/09/18</td>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            <Pagination className="pagination-wrapper">
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
            </Row>
        );
    }
}


export default PointHistory;
