'use client';
import React, {useEffect, useState} from 'react';
import {
  Button,
  Col,
  Image,
  Input,
  Layout,
  Menu,
  Pagination,
  Row,
  Space,
} from 'antd';
import Container from '@/components/Container';
import CourseCard from '@/components/CourseCard';
import {useRouter} from 'next/router';
import api from '@/utils/axios';

const {Header, Footer, Sider, Content} = Layout;

const CourseDetail = ({onPress}) => {
  const router = useRouter();
  const [course, setCourse] = useState({});
  useEffect(() => {
    initData();
    return () => {};
  }, []);

  const initData = async () => {
    const {id} = router.query;
    const res = await api.get(`/courses/87d3c280-3b18-11ee-932c-374b4f7aa08f`);
    setCourse(res);
  };

  const onEnroll = async () => {
    const res = await api.post(`/courses/enroll`, {
      classId: '87d3c280-3b18-11ee-932c-374b4f7aa08f',
      studentId: '74bcb691-f8b4-426c-9c1f-c1032f192eab',
    });
    console.log(res);
  };
  const renderCoursesList = () => {};

  const renderMainSection = () => {};

  const renderReviews = () => {
    return <Row></Row>;
  };
  return (
    <Container>
      {renderMainSection()}
      {renderCoursesList()}
      {renderReviews()}
      <Button onClick={onEnroll}>Enroll</Button>
    </Container>
  );
};

export default CourseDetail;
