import React, {Component} from 'react';
import {Container, Row, Col, Card,FormGroup, Label, Input} from 'reactstrap';
import './Electronics.scss' ;

class Electronics extends Component {
    constructor(props){
        super(props);

        this.state = { searchString: '' }
    }

    handleChange = (e) => {
        this.setState({ searchString:e.target.value });
    };

    render() {
        return (
            <Container fluid className="electronics-parent-wrapper">
                <div className="electronics-wrapper">
                    <Row className="categories-wrapper">
                        <Col md={3}>
                            <div className="inner-wrapper">
                                <h3>Categories</h3>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />
                                        <p>Phones & Accessories</p>
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        <p>Computers</p>
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        <p>Tablets & Accessories</p>
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        <p>Office Electronics</p>
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        <p>TV Box & Mini PCs</p>
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        <p>School Supplies</p>
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        <p>For Kids</p>
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        <p>Networking Devices</p>
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        <p>Kitchen Appliances</p>
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        <p>Televisions</p>
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        <p>Air Conditioning</p>
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        <p>Camera & Photo</p>
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        <p>Video Game</p>
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        <p>Others</p>
                                    </Label>
                                </FormGroup>
                            </div>
                        </Col>
                        <Col md={9} className="showcase-wrapper">
                            <Row className="search-row">
                                <Col lg={9}>
                                    <Input type="text" id="search" value={this.state.searchString} onChange={this.handleChange} placeholder="Search Keyword"/>
                                </Col>
                                <Col lg={3}>
                                    <button className="btn">Search</button>
                                </Col>
                            </Row>
                            <Row className="showcase-inner-wrapper">
                                <Col xs={12}>
                                    <Row>
                                        <Col>
                                            <h2>All Electronics Gadgets</h2>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={4} lg={6} xs={12} className="item-wrapper">
                                    <div className="item-image-card">
                                        <img src="/images/item.png" alt=""/>
                                        <button className="btn">Buy Now</button>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    <span>100,000 pts</span>
                                </Col>
                                <Col xl={4} lg={6} xs={12} className="item-wrapper">
                                    <div className="item-image-card">
                                        <img src="/images/item.png" alt=""/>
                                        <button className="btn">Buy Now</button>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    <span>100,000 pts</span>
                                </Col>
                                <Col xl={4} lg={6} xs={12} className="item-wrapper">
                                    <div className="item-image-card">
                                        <img src="/images/item.png" alt=""/>
                                        <button className="btn">Buy Now</button>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    <span>100,000 pts</span>
                                </Col>
                                <Col xl={4} lg={6} xs={12} className="item-wrapper">
                                    <div className="item-image-card">
                                        <img src="/images/item.png" alt=""/>
                                        <button className="btn">Buy Now</button>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    <span>100,000 pts</span>
                                </Col>
                                <Col xl={4} lg={6} xs={12} className="item-wrapper">
                                    <div className="item-image-card">
                                        <img src="/images/item.png" alt=""/>
                                        <button className="btn">Buy Now</button>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    <span>100,000 pts</span>
                                </Col>
                                <Col xl={4} lg={6} xs={12} className="item-wrapper">
                                    <div className="item-image-card">
                                        <img src="/images/item.png" alt=""/>
                                        <button className="btn">Buy Now</button>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    <span>100,000 pts</span>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}


export default Electronics;
