'use client';
import React, { useEffect, useState } from 'react';
import { Col, Image, Input, Layout, Row } from 'antd';
import Container from '@/components/Container';
import CourseCard from '@/components/CourseCard';
import { useRouter } from 'next/router';
import api from '@/utils/axios';
import { DotLoader } from 'react-spinners';

const { Header, Footer, Sider, Content } = Layout;

const LecturerDetail = ({ onPress }) => {
  const router = useRouter();
  const [lecturer, setLecturer] = useState({});
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading to true

  useEffect(() => {
    if (router.isReady)
      initData();
  }, [router.isReady]);

  const initData = async () => {
    try {
      const { id } = router.query;

      const { result } = await api.get(`/users/${id}/taught-profile-courses`);
      setLecturer(result);
      setCourses(result?.courses);
      setLoading(false); // Set loading to false when data is loaded
    } catch (error) {
      console.error("Error loading data:", error);
      setLoading(false); // Set loading to false even if there's an error
    }
  };

  const onJoinCourse = item => {
    router.push({ pathname: `/course/detail`, query: { id: item?.id ?? '' } });
  };

  const renderCoursesList = () => {
    if (courses?.length === 0) {
      return (
        <div style={{ textAlign: 'center', fontSize: 24 }}>
          This lecturer does not have any available courses.
        </div>
      );
    }
    return (
      <div style={{ background: '#d8d8d8', padding: 60 }}>
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
          {courses?.map(i => {
            return (
              <Col xxl={6} md={12} xs={24}>
                <CourseCard onPress={() => onJoinCourse(i)} item={i} />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  };

  const renderMainSection = () => {
    const { name, description, avatar, major, rating, title } = lecturer;
    let ratingColor = '#34c759';

    if (rating < 7) {
      ratingColor = '#fa541c';
    } else if (rating < 5) {
      ratingColor = '#f5222d';
    }
    return (
      <Row style={{ background: '#fff', padding: 60 }}>
        <Col md={6} xs={24} style={{}}>
          <Image preview={false} width={'100%'} src={avatar} />
        </Col>
        <Col md={18} xs={24} style={{}}>
          <div style={{ fontSize: 32, marginBottom: 8, fontWeight: 'bold' }}>
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
    );
  };

  const renderReviews = () => {
    return <Row></Row>;
  };

  return (
    <Container>
      {loading ? (
        // Render a loading indicator here
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <DotLoader color="#36d7b7" />
        </div>
      ) : (
        // Render your content when loading is false
        <>
          {renderMainSection()}
          {renderCoursesList()}
          {renderReviews()}
        </>
      )}
    </Container>
  );
};

export default LecturerDetail;
