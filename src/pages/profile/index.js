import React, { useEffect, useState } from 'react';
import { Col, Image, Layout, Row } from 'antd';
import Container from '@/components/Container';
import { useRouter } from 'next/router';
import api from '@/utils/axios';

const { Content } = Layout;

const UserProfile = () => {
  const router = useRouter();
  const [user, setUser] = useState({});

  useEffect(() => {
    const {user} = JSON.parse(localStorage.getItem('user'));

    setUser(user);
  }, []);

  return (
    <Container>
            <Row gutter={16} justify="center" align="middle">
                <Col xs={24} sm={8}>
                    <Image
                    preview={false}
                    width={200}
                    src={user.avatar || 'https://icon-library.com/images/user-icon-vector-free/user-icon-vector-free-20.jpg'}
                    />
                </Col>
                <Col xs={24} sm={16}>
                    <h1>{user.name}</h1>
                    <p>Email: {user.email}</p>
                    <p>Status: {user.isverified ? 'Verified' : 'Not Verified'}</p>
                    <p>Birthday: {user.birthday || "Not set"}</p>
                    <p>Phone number: {user.phone || "Not set"}</p>
                    {user.major && <p>Major: {user.major}</p>}
                    {user.description && <p>Description: {user.description}</p>}
                    {user.rating && <p>Rating: {user.rating}</p>}
                </Col>
            </Row>
    </Container>
  );
};

export default UserProfile;
