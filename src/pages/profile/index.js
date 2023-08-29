import React, {useEffect, useState} from 'react';
import {Col, Image, Layout, Row} from 'antd';
import Container from '@/components/Container';
import {useRouter} from 'next/router';
import api from '@/utils/axios';

const {Content} = Layout;

const UserProfile = () => {
  const router = useRouter();
  const [user, setUser] = useState({});

  useEffect(() => {
    const {user} = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    setUser(user);
  }, []);
  const {name, title, major, description, rating, avatar} = user;

  let ratingColor = '#34c759';

  if (rating < 7) {
    ratingColor = '#fa541c';
  } else if (rating < 5) {
    ratingColor = '#f5222d';
  }

  return (
    <Container>
      <Row
        style={{
          background: '#fff',
          padding: 60,
        }}>
        <Col md={6} xs={24} style={{}}>
          <Image preview={false} width={'100%'} src={avatar} />
        </Col>
        <Col md={18} xs={24} style={{}}>
          <div style={{fontSize: 32, marginBottom: 8, fontWeight: 'bold'}}>
            {name}
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#727272',
              fontWeight: 'bold',
              marginBottom: 12,
            }}>
            {title}
          </div>
          <div
            style={{
              fontSize: 18,
              color: '#fa541c',
              fontWeight: 'bold',
              marginBottom: 12,
            }}>
            {major}
          </div>
          <div
            style={{
              marginBottom: 12,
              fontSize: 16,
            }}>
            {description}
          </div>
          <div
            style={{
              fontSize: 16,
              color: ratingColor,
            }}>
            Rating: {rating}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
