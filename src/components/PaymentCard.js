import React from 'react';
import {Card, Col, Image, Radio, Row} from "antd";

const PaymentCard = () => {
    return (
        <Card style={{ maxWidth: 500,marginBottom: 16, borderWidth: 1, borderColor: '#d8d8d8'}} bodyStyle={{paddingTop: 0,paddingBottom: 0,
            paddingLeft: 8, paddingRight: 8}}>
            <Row>
                <Row style={{marginRight: 24, alignItems: 'flex-start'}}>
                    <Radio style={{marginTop: 14}}/>
                    <p>PayPal</p>
                </Row>
                <Col style={{maxWidth: 320}}>
                    <p>You will be redirected to the Paypal website after submitting your order</p>

                </Col>
                <Col>
                    <Image preview={false} style={{width: 36, height: 48}} src={"https://static.vecteezy.com/system/resources/previews/022/101/081/original/paypal-logo-transparent-free-png.png"}/>

                </Col>
            </Row>
        </Card>
    );
};

export default PaymentCard;
