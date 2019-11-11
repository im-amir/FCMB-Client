import React, { Component } from "react";
import { Row, Container, Col, Form, FormGroup, Input, Label } from "reactstrap";
import GreyNav from "../../components/GreyNav";
import * as actionCreators from '../../actions/index.js';
import {connect} from "react-redux";
import './Purchase.scss'
import PaystackButton  from 'react-paystack'

class PurchasePoints extends Component {

  state = {
    Account:{
      email:'someone@example.com',
      points:1,
      amount:1
    },
    key:"pk_test_dea4d3cae3e6ee33a96aca833e6cf9dca5b035b5",
    Payment:{
      userId:'',
      email:'',
      points:0,
      payment:0,
      transactionId:''
    }
  }

  handleChange = async ({ currentTarget: input }) => {
    // const errors = [...this.state.errors];
    let Account = { ...this.state.Account };

    Account[input.name] = input.value;
    
    await this.setState({ Account });

    Account = { ...this.state.Account };

    Account.amount = this.state.Account.points * 2.5 ;
    
    await this.setState({Account});

    let Payment = {...this.state.Payment};
    Payment.userId = this.props.userAccount.Id;
    Payment.email = this.state.Account.email;
    Payment.points = this.state.Account.points;
    Payment.payment = this.state.Account.amount;

    this.setState({Payment});
  };


  handleSubmit = () => {
    
  }

  //PayStack button functions
  getReference(){
    console.log("")
  }

  close(){
    console.log("")
  }

  callback = async (response)=>{
    console.log(response);
    let Payment = {...this.state.Payment};
    Payment.transactionId = response.reference;
    await this.setState({Payment});
    this.props.savePayment(this.state.Payment);
  }

  render() {
    return (
      <div className="add_product_wrapper">
      <script src="https://js.paystack.co/v1/inline.js"></script>
        <Container>
          <Row>
            <Col md="12">
              <GreyNav heading="Send Points" />
            </Col>
            <Col md="12" style={{ padding: "0px",  boxShadow: "1px 1px #BBBBBB" }}>
              <div style={{
                  backgroundColor: "white",
                  width: "40%", margin:'30px auto'
                }}
              >
              <div className="payStackWrapper"
                style={{
                  width:'100%',margin:'auto',height:'100%',padding:'2% 0',
                }}
              >
              <Form style={{boxShadow:'0 0 10px #dadada'}}>
                  <Row>
                      <FormGroup>
                          <Col md={12}>
                              <Label for="category">Enter Email</Label>
                              <Input type="text" name="email" id="email" value={this.state.Account.email} onChange= {(e)=> this.handleChange(e)}  placeholder="Email" />
                          </Col>
                      </FormGroup>
                      
                      <FormGroup>
                          <Col md={12}>
                              <Label for="category">Enter Points</Label>
                              <Input type="number" name="points" id="points" value={this.state.Account.points} onChange= {(e)=> this.handleChange(e)}  placeholder="Points to buy" />
                          </Col>
                      </FormGroup>
                  </Row>
                  
                  <div className="buttonWrapper" >
                    <PaystackButton
                      text="Make Payment"
                      class="payButton"
                      callback={this.callback}
                      disabled={false} 
                      embed={true} 
                      reference={this.getReference()}
                      email={this.state.Account.email}
                      amount={this.state.Account.amount}
                      paystackkey={this.state.key}
                      tag="button"
                      />
                      </div>
                  </Form>
                  </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


const mapStateToProps=(state)=>({
  userAccount: state.loggedInUserAccount
})

const mapDispatchToProps = dispatch => {
  return {
    savePayment: (payment) => dispatch(actionCreators.savePayment(payment))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PurchasePoints);