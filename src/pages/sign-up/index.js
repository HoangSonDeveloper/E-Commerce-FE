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
  const [form] = Form.useForm();
  const [submittable, setSubmittable] = useState(false);
  const values = Form.useWatch([], form);

  useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(
        () => {
          console.log(values);
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        },
      );
  }, [values]);

  const onSubmit = async () => {
    const name = form.getFieldValue('name');
    const email = form.getFieldValue('email');
    const password = form.getFieldValue('password');
    await axios.post('/auth/register', {email, password, name}).then(res => {
      if (!!res?.id) {
        router.push('/');
      }
    });
  };

  const validateConfirmPassword = (_, value) => {
    const password = form.getFieldValue('password');
    if (value && value !== password) {
      return Promise.reject(new Error('Passwords do not match'));
    }
    return Promise.resolve();
  };

  const renderForm = () => {
    return (
      <Form form={form} layout={'vertical'}>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please enter your name',
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
            placeholder="Enter your name..."
          />
        </Form.Item>
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
        <Form.Item
          label="Confirm Password"
          name="confirmedPassword"
          rules={[
            {
              required: true,
              message: 'Please re-enter your password',
            },
            {validator: validateConfirmPassword},
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
            placeholder="Re-enter your password .."
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
            Sign up
          </Button>
        </Form.Item>
        <Divider></Divider>
        <p
          style={{
            textAlign: 'center',
            marginTop: '4px',
            marginBottom: '4px',
          }}>
          Already have an account?
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
          className="bg-[#555FD9] hover:bg-[#1e2bb7] active:bg-[#040c6e]">
          Login
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
        Sign Up
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
