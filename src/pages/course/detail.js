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
  Rate,
  Row,
  Space,
} from 'antd';
import Container from '@/components/Container';
import CourseCard from '@/components/CourseCard';
import {useRouter} from 'next/router';
import api from '@/utils/axios';
import { convertISODate } from '@/utils/utils';

const {Header, Footer, Sider, Content} = Layout;

const CourseDetail = ({onPress}) => {
  const router = useRouter();
  const [course, setCourse] = useState({});
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    if (router.isReady) {
    async function fetchData() {
      const {id} = router.query;
      const course = await getCourseInfo(id);
      const classes = await getCourseClasses(id);
      setCourse(course);
      setClasses(classes);
    }
    fetchData();
    }
  }, [router.isReady]);

  const getCourseInfo = async (courseId) => {
    const res = await api.get(`/courses/${courseId}/course-info`);

    return res;
  }

  const getCourseClasses = async (courseId) => {
    const {result} = await api.get(`/courses/classes?course_id=${courseId}`);

    return result;
  }

  const handleCategoryClick = (categoryName) => {
    // Use router.push to navigate to the category page
    router.push(`/category/${categoryName.toLowerCase()}`);
  };

  const onEnroll = async () => {
    // const res = await api.post(`/courses/enroll`, {
    //   classId: '87d3c280-3b18-11ee-932c-374b4f7aa08f',
    //   studentId: '74bcb691-f8b4-426c-9c1f-c1032f192eab',
    // }, {
    //   withCredentials: true,
    // });
    const checkoutSession = await api.post("/payment/create-checkout-session");
    // router.push(checkoutSession.url);
    router.push(checkoutSession.url)
  };

  const renderClassesList = () => {
    return (
      <Col style={{
        marginTop: 16,
      }}>
        <Row style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 16,
          marginTop: 16,
        }}>Available Classes For <span style={{color: "red", marginLeft: 7}}>{course.name}:</span>
        </Row>
        <Row>
          {classes?.map(i => {
            return (
              <Col span={6} style={{
                padding: 10,
                background: "#d8d8d8"
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginBottom: 16,
                }}>
                  <div style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>{course.name}</div>
                  <div style={{
                    fontSize: 14,
                  }}>Start date: {convertISODate(i.startDate)}</div>
                  <div style={{
                    fontSize: 14,
                  }}>End date: {convertISODate(i.endDate)}</div>
                  <div style={{
                    fontSize: 14,
                  }}>Enrollment limit: {i.enrollmentLimit == 0 ? "No limit" : i.enrollmentLimit}</div>
                  <div style={{
                    fontSize: 14,
                  }}>Enrolled: {i.enrolled}</div>
                  <Button style={{
                    marginTop: 16,
                  }} onClick={onEnroll}>Enroll</Button>
                </div>
              </Col>
            );
          })}
        </Row>
      </Col>
    );
  };

  const renderCourseInformation = () => {
    return (
      <Row>
        <Col span={12}>
          <Image
            preview={false}
            width={'100%'}
            height={350}
            src={course?.thumbnail}
          />
        </Col>
        <Col span={11} style={{
          marginLeft: 16,
        }}>
          <div style={{fontSize: 30, fontWeight: 'bold', marginTop: 12, marginBottom: 16}}>
            {course.name}
          </div>
          <div style={{marginTop: 4, marginBottom: 12}}>Description: {course?.description}</div>
          <div style={{fontWeight: 'bold', color: '#fa541c', marginBottom: 16}}>
            Price: {course?.price}$
          </div>
          <div style={{marginTop: 4, marginBottom: 12}}>Format: {course?.format}</div>
          <div style={{marginTop: 4, marginBottom: 12}}>Level: {course?.level}</div>
          Rating: <Rate value={course.rating} allowHalf disabled />
          <div style={{ marginTop: 4, marginBottom: 12 }}>
            Categories:{' '}
            {course.categories?.map((category, index) => (
              <span key={index}>
                <a
                  style={{
                    color: 'red',
                    fontWeight: 'bold',
                    marginRight: '8px',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                  onClick={() => handleCategoryClick(category.name)}
                >
                  {category.name}
                </a>
                {index < course.categories.length - 1 && ','}
              </span>
            ))}
          </div>
          <div style={{ marginTop: 4, marginBottom: 12 }}>
            Instructors:{' '}
            {course.instructors?.map((category, index) => (
              <span key={index}>
                <a
                  style={{
                    color: 'red',
                    fontWeight: 'bold',
                    marginRight: '8px',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                  onClick={() => handleCategoryClick(category.name)}
                >
                  {category.name}
                </a>
                {index < course.categories.length - 1 && ','}
              </span>
            ))}
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
      {console.log(course)}
      {renderCourseInformation()}
      {renderClassesList()}
      {renderReviews()}
    </Container>
  );
};

export default CourseDetail;
