import React, { Component } from "react";
import { Row, Col } from 'reactstrap';


class GreyNav extends Component {
  render() {
    return (
      <div>
        <Row style={{ padding: '10px', backgroundColor: '#D8D8D8', height: '60px', borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }}>
          <h4 style={{ marginTop: '15px', opacity: '0.7' }}>
            {this.props.heading}
          </h4>
        </Row>
      </div>
    );
  };
}
export default GreyNav
