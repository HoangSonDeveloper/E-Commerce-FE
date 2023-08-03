'use client'

import SignUpForm from "./SignUpForm";
import SignInWith from "@/components/SignInWith"
import {Row, Col, Space} from 'antd'

const  SignUpPage=() => {
  return (
    <Space direction='vertical' style={{width: '100%'}}>
      <p 
        style={{
          textAlign: 'center',
          justifyContent: 'center',
          height: '60px',
          fontSize: '40px',
          marginTop: '20px',
          marginBottom: '12px',
        }}
      >
        Sign Up
      </p>

      <Row 
        justify="space-between" 
        align='middle' 
        style={{
          maxWidth: '1012px', 
          width: '100%', margin: 'auto', 
          paddingTop: '20px' 
        }}>
        
        <Col span={11} align='center'>
          <SignUpForm/>
        </Col>

        <Col span={2} align='center' style={{color:'#666'}}>
          <p> Or </p>
          <p>Login</p>
          <p>With</p>
        </Col>

        <Col span={11} align="center">
          <SignInWith/> 
        </Col>
      </Row>
    </Space>
      
  );
}

export default SignUpPage
