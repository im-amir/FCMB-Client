import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Col} from 'reactstrap'
import TopHeaderRightPart from './TopHeaderRightPart'
import './index.scss'

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
        <Col key={1}>
            <Link to="/">
                <img src="/images/logo.png" alt="" className="logo_login"/>
            </Link>
        </Col>,
        <TopHeaderRightPart page={this.props.page} isLoggedIn={this.state.isLoggedIn} />
    ]
    );
    }
}

export default Index;
