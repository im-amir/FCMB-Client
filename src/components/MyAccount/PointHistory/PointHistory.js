import React, {Component} from 'react';
import {Row, Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import * as actionCreators from '../../../actions/index.js';
import './PointHistory.scss';

class PointHistory extends Component {

    componentWillMount(){
        this.props.getPointsHistory(this.props.userAccount.Id);
    }

    getFormatedDate(date){
        let newDate = new Date(date);
        return newDate.toLocaleDateString();
    }

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
                        {this.props.pointsHistory && 
                            this.props.pointsHistory.map(h => (
                                <tr key={h.id}>
                                    <td>{h.activity}</td>
                                    <td>{h.type}</td>
                                    <td style={{color:h.type === "credit"?'green':'red'}}>{h.points}</td>
                                    <td>{this.getFormatedDate(h.date)}</td>
                                </tr>
                            ))
                        }
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




const mapStateToProps=(state)=>({
    userAccount:state.loggedInUserAccount,
    userOrders: state.userOrders,
    pointsHistory:state.pointsHistory
  })
  
  const mapDispatchToProps = dispatch => {
    return {
        getPointsHistory: (userId) => dispatch(actionCreators.getPointsHistory(userId))
    }
  }
  
  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PointHistory));