'use client';

import SignInWith from '@/components/SignInWith';
import {Row, Col, Space, Form, Input, Checkbox, Button, Divider} from 'antd';
import Container from '@/components/Container';
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {useEffect, useState} from 'react';
import axios from '@/utils/axios';
import {useRouter} from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const [submittable, setSubmittable] = useState(false);
  const [form] = Form.useForm();
  const values = Form.useWatch([], form);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!!user) {
      router.push('/');
    }
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

  const onSubmit = async () => {
    const email = form.getFieldValue('email');
    const password = form.getFieldValue('password');
    const {result} = await axios.post(
      '/auth/login',
      {email, password},
      {
        withCredentials: true,
      },
    );

    if (!!result?.user?.id) {
      router.push('/');
    }

    localStorage.setItem('user', JSON.stringify(result));
  };

  const renderForm = () => {
    return (
      <Form form={form} layout={'vertical'}>
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
          ]}>
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
          ]}>
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
            iconRender={visible =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
        <Form.Item>
          <Row justify="space-between">
            <Col>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Col>
            <Col>
              <a href="/login/recovery" style={{float: 'right'}}>
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
              color: submittable ? 'white' : 'black',
              fontWeight: 'bold',
              borderRadius: '0.25rem',
            }}
            onClick={onSubmit}
            className={
              submittable
                ? 'bg-[#555FD9] hover:bg-[#1e2bb7] active:bg-[#040c6e]'
                : ''
            }
            disabled={!submittable}>
            Log in
          </Button>
        </Form.Item>

        <Divider></Divider>

        <p
          style={{
            textAlign: 'center',
            marginTop: '4px',
            marginBottom: '4px',
          }}>
          Don't have account?
        </p>
        <Button
          type="primary"
          onClick={() => router.push('/signup')}
          style={{
            width: '100%',
            height: '36px',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '0.25rem',
          }}
          className="bg-[#555FD9] hover:bg-[#1e2bb7] active:bg-[#040c6e]">
          Sign up
        </Button>
      </Form>
    );
  };
  return (
    <Container direction="vertical" style={{width: '100%'}}>
      <p
        style={{
          textAlign: 'center',
          justifyContent: 'center',
          height: '60px',
          fontSize: '40px',
          marginTop: '20px',
          marginBottom: '20px',
        }}>
        Login
      </p>

      <Row
        justify="space-between"
        align="middle"
        style={{
          maxWidth: '1012px',
          width: '100%',
          margin: 'auto',
          paddingTop: '20px',
        }}>
        <Col span={11} align="center">
          {renderForm()}
        </Col>

        <Col span={2} align="center" style={{color: '#666'}}>
          <Divider style={{height: 400}} type={'vertical'}>
            Or
          </Divider>
        </Col>

        <Col span={11} align="center">
          <SignInWith />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
