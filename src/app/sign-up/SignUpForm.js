"use client"

import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {Input, Button, Space, Row, Col, Form, Checkbox, Divider} from 'antd'
import {UserOutlined, LockOutlined, EyeTwoTone, EyeInvisibleOutlined} from '@ant-design/icons'


const SignUpForm=() => {
  
  const router = useRouter()
  const [form] = Form.useForm()
  const [submittable, setSubmittable] = useState(false); 
  
  const values = Form.useWatch([], form);

  //check disabled button login
  useEffect(() => {
    form
      .validateFields({
         validateOnly: true,
      })
      .then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        },
      );
  }, [values]);

  //check if user logged in then can not access login page. 
  useEffect(()=>{
    let token = localStorage.getItem("token");
    if(token){
        router.push('/')
    }
  },[])

  const handleSignUp = async () =>{
    try{
        if(!values.email || !values.password ||values.confirm){
            alert("Email or Password/Confirm Password required")
            return
        }
        const res = await fetch("https://strapi.learnbox.live/api/auth/local/register", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email: values.email, password: values.password, username: values.username}),
        })
        if (!res.ok) {
            if(res.status===400){
                const data = await res.json()
                if(data && data.error){
                    console.log(data.error);
                    alert(`Failed Login: ${data.error} `)
                } else {
                    alert("Failed Login. Try again")
                }
            } 
        }
        console.log(res);
        const data = await res.json();
        console.log(data);

        if(data&&data.jwt){
            localStorage.setItem("token", data.jwt)
            alert("SignUp successful!")
            router.push('/login')
        }
    } catch (error){
        console.error(error.message)
    }
  }

  return (
    <Space direction='vertical' style={{width:'340px'}}>
      <h1 
        style={{
          textAlign: 'center',
          fontSize: '22px', 
          marginBottom: '6px',
          width: '340px'
        }}
        >Sign Up
      </h1>

      <Form
        form={form}
        name="signup-form"
        initialValues={{ remember: true }}
        onFinish={handleSignUp}
        layout='vertical'
      >
        <Form.Item
          label="Email address"
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please enter your email address',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            style={{
              height: '2.5rem',  
              padding: '0.75rem', 
              borderRadius: '0.25rem', 
              borderWidth: '1px', 
              borderColor: '#555FD9', 
            }} 
            placeholder="Enter your email address .."
          />
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please enter your username',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            style={{
              height: '2.5rem',  
              padding: '0.75rem', 
              borderRadius: '0.25rem', 
              borderWidth: '1px', 
              borderColor: '#555FD9', 
            }} 
            placeholder="Enter your username .."
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please enter your password',
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />} 
            style={{
              height: '2.5rem',  
              padding: '0.75rem', 
              borderRadius: '0.25rem', 
              borderWidth: '1px', 
              borderColor: '#555FD9', 
            }} 
            placeholder="Enter your password .."
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The new password that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />} 
            style={{
              height: '2.5rem',  
              padding: '0.75rem', 
              borderRadius: '0.25rem', 
              borderWidth: '1px', 
              borderColor: '#555FD9', 
            }} 
            placeholder="Enter your confirm password .."
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <Form.Item >
          <Row justify='space-between'>
            <Col>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Col>
            <Col>
              <a href="/login/recovery" style={{float: "right"}}>
                Forgot password
              </a>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: '100%', 
              height: '36px',
              color: submittable? 'white': 'black',
              fontWeight: 'bold', 
              borderRadius: '0.25rem',
            }}
            className={submittable ? "bg-[#555FD9] hover:bg-[#1e2bb7] active:bg-[#040c6e]" : ""}
            disabled={!submittable}
            
          >
            Sign Up
          </Button>
        </Form.Item>

        <p style={{
          textAlign: 'center', 
          marginBottom: '2px'
        }
        }
          >Have an account?
        </p>
        <Button
          type="primary"
          onClick={() => router.push('/login')}
          style={{
            width: '100%', 
            height: '36px',
            color: 'white',
            fontWeight: 'bold', 
            borderRadius: '0.25rem',
          }}
          className= "bg-[#555FD9] hover:bg-[#1e2bb7] active:bg-[#040c6e]"
        >
          Log In
        </Button>
      </Form>
    </Space>
  )
}

export default SignUpForm;