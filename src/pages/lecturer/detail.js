'use client';
import React, {useEffect, useState} from 'react';
import {Col, Image, Input, Layout, Menu, Pagination, Row, Space} from 'antd';
import Container from '@/components/Container';
import CourseCard from '@/components/CourseCard';
import {useRouter} from 'next/router';
import api from '@/utils/axios';

const {Header, Footer, Sider, Content} = Layout;

const LecturerDetail = ({onPress}) => {
  const router = useRouter();
  const [lecturer, setLecturer] = useState({});
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    initData();
    return () => {};
  }, []);

  const initData = async () => {
    const {id} = router.query;
    const res = await api.get(
      `/users/74bcb691-f8b4-426c-9c1f-c1032f192eab/taught-profile-courses`,
    );
    setLecturer(res);
    setCourses(res?.courses);
  };
  const renderCoursesList = () => {
    return (
      <div style={{background: '#d8d8d8', padding: 60}}>
        <div
          style={{
            textTransform: 'uppercase',
            fontSize: 32,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 24,
          }}>
          Courses
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
          {courses.map(i => {
            return (
              <Col xxl={6} md={12} xs={24}>
                <CourseCard item={i} />;
              </Col>
            );
          })}
        </Row>
      </div>
    );
  };

  const renderMainSection = () => {
    const {name, description, avatar, major, rating, title} = lecturer;
    return (
      <Row style={{background: '#fff', padding: 60}}>
        <Col md={6} xs={24} style={{background: 'red'}}>
          <Image preview={false} width={'100%'} src={avatar} />
        </Col>
        <Col md={18} xs={24} style={{background: 'blue'}}>
          <div>{name}</div>
          <div>{title}</div>
          <div>{description}</div>
          <div>{major}</div>
          <div>{rating}</div>
        </Col>
      </Row>
    );
  };

  const renderReviews = () => {
    return <Row></Row>;
  };
  return (
    <Container>
      {renderMainSection()}
      {renderCoursesList()}
      {renderReviews()}
    </Container>
  );
};

export default LecturerDetail;
