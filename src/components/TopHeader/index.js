import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Col} from 'reactstrap'
import TopHeaderRightPart from './TopHeaderRightPart'

class Index extends Component {
    constructor(props){
        super(props);

        this.state = {isLoggedIn: true}
    }


    componentDidMount() {
        this.setState({isLoggedIn: this.props.isLoggedIn})
    }


    render() {
        return ([
        <Col key={1} md={{size:2, offset: 0}} sm={2} xs={1} style={{minWidth: '60px'}}>
            <Link to="/">
                <img src="/images/logo.png" alt=""/>
            </Link>
        </Col>,
        <TopHeaderRightPart isLoggedIn={this.state.isLoggedIn} />
    ]
    );
    }
}

export default Index;
