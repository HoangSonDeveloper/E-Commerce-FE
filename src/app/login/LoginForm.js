"use client"

import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {Input, Button, Space, Row, Col, Form, Checkbox, Divider} from 'antd'
import {UserOutlined, LockOutlined, EyeTwoTone, EyeInvisibleOutlined} from '@ant-design/icons'


const LoginForm=() => {
  
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

  const handleLogin = async () =>{
    try{
        if(!values.email || !values.password){
            alert("Email or password required")
            return
        }
        const res = await fetch("https://strapi.learnbox.live/api/auth/local/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email: values.email, password: values.password}),
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
            } else {
                throw new Error('Fail to fetch data')
            }
        }

        const data = await res.json();

        if(data&&data.jwt){
            localStorage.setItem("token", data.jwt)
            alert("Login successful!")
            router.push('/')
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
          marginBottom: '10px',
          width: '340px'
        }}
        >Log In
      </h1>

      <Form
        form={form}
        name="login-form"
        initialValues={{ remember: true }}
        onFinish={handleLogin}
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
            Log in
          </Button>
        </Form.Item>

        <Divider>OR</Divider>

        <p style={{
          textAlign: 'center', 
          marginTop: '4px', 
          marginBottom: '4px'
        }
        }
          >Already have an account?
        </p>
        <Button
          type="primary"
          onClick={() => router.push('/sign-up')}
          style={{
            width: '100%', 
            height: '36px',
            color: 'white',
            fontWeight: 'bold', 
            borderRadius: '0.25rem',
          }}
          className= "bg-[#555FD9] hover:bg-[#1e2bb7] active:bg-[#040c6e]"
        >
          Sign up
        </Button>
      </Form>
    </Space>
  )
}

export default LoginForm;