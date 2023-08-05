import React from 'react';
import {Button, Checkbox, Col, Row} from "antd";
import Container from "@/components/Container";
import PaymentCard from "@/components/PaymentCard";
import CreditCardForm from "@/components/CreditCardForm";
import {LockFilled} from "@ant-design/icons";

const PaymentScreen = () => {
    return (
        <Container>
            <Row style={{paddingLeft: 48, paddingRight: 48}}>
                <Col span={16}>
                    <div style={{marginBottom: 32, fontSize: 24, fontWeight: 'bold'}}>Checkout</div>
                    <Col style={{marginBottom: 28}}>
                        <PaymentCard/>
                        <PaymentCard/>
                    </Col>
                    <Col>
                        <CreditCardForm/>
                    </Col>
                    <Row style={{alignItems: "center", marginTop: 24}}>
                        <div style={{width: 28, height: 28,marginRight: 8,
                            borderWidth: 1,borderStyle:"solid",
                            borderRadius:14,display:'flex',borderColor:"#1660CF",
                            justifyContent:'center', alignItems:'center'}}>
                            <LockFilled  style={{color: "#1660CF"}}/>
                        </div>
                        <div style={{color:"#ccc", fontSize: 12}}>We protect your payment information using encryption to provide bank-level security.</div>
                    </Row>
                </Col>
                <Col span={8}>
                    <div style={{marginBottom: 24, fontSize: 20, fontWeight: 'bold'}}>Summary</div>
                    <Col>
                        <Row style={{justifyContent: "space-between", marginBottom: 12}}>
                            <div>Subtotal</div>
                            <div>$49.99</div>
                        </Row>
                        <Row style={{justifyContent: "space-between", marginBottom: 12}}>
                            <div>Discount</div>
                            <div>$49.99</div>
                        </Row>
                        <div style={{height: 1, background: '#d8d8d8', marginBottom: 12}}/>
                        <Row style={{justifyContent: "space-between", marginBottom: 12}}>
                            <div>Grand Total</div>
                            <div>$49.99</div>
                        </Row>
                        <Row style={{alignItems: "center", marginBottom: 12}}>
                            <Checkbox/>
                            <div style={{fontSize: 12, display:'block', marginLeft: 12}}>Please check to acknowledge our </div>
                            <Button style={{fontSize: 12, marginLeft: -12}} type={"link"}>Privacy & Terms Policy</Button>
                        </Row>
                        <Row>
                            <Button style={{flex: 1, background : "#555FD9"}} type='primary'>Proceed</Button>
                        </Row>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
};

export default PaymentScreen;
