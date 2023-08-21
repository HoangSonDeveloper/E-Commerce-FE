'use client';

import React, {useEffect, useState} from 'react';
import {
  Card,
  Carousel,
  Col,
  Image,
  Input,
  Layout,
  List,
  Menu,
  Pagination,
  Row,
  Space,
} from 'antd';
import Container from '@/components/Container';
import LectureCard from '@/components/LectureCard';
import api from '@/utils/axios';
import {useRouter} from 'next/router';

const {Header, Footer, Sider, Content} = Layout;

const LectureList = props => {
  const router = useRouter();

  const [lecturers, setLecturers] = useState([]);
  useEffect(() => {
    initData();
    return () => {};
  }, []);

  const onGoDetail = (item, e) => {
    e.preventDefault();
    router.push({pathname: '/lecturer/detail', query: {id: item?.id ?? ''}});
  };

  const initData = async () => {
    const res = await api.get('/users/instructors');
    setLecturers(res?.result);
  };
  const renderFeatured = () => {
    return (
      <div style={{background: '#E7762F', padding: 60}}>
        <div
          style={{
            textTransform: 'uppercase',
            fontSize: 32,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 24,
          }}>
          featured lectures
        </div>
        <Row
          gutter={[24, 24]}
          style={{
            flexDirection: 'row',
            flex: 1,
            display: 'flex',
            overflow: 'scroll-x',
            flexWrap: 'no-wrap',
          }}>
          {lecturers.map((i, ii) => {
            return (
              <Col sm={12} xs={24} lg={8} xl={6} xxl={4}>
                <LectureCard
                  item={i}
                  onClick={e => {
                    onGoDetail(i, e);
                  }}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  };
  const renderList = () => {
    return <div></div>;
  };
  return <Container>{renderFeatured()}</Container>;
};

export default LectureList;
