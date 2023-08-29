'use client';
import React, {useEffect, useState} from 'react';
import {
  Button,
  Col,
  Image,
  Input,
  Layout,
  Menu,
  Modal,
  Pagination,
  Rate,
  Row,
  Space,
} from 'antd';
import Container from '@/components/Container';
import CourseCard from '@/components/CourseCard';
import {useRouter} from 'next/router';
import api from '@/utils/axios';
import {convertISODate} from '@/utils/utils';

const {Header, Footer, Sider, Content} = Layout;

const CourseDetail = ({onPress}) => {
  const router = useRouter();
  const [course, setCourse] = useState({});
  const [classes, setClasses] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);

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

  const getCourseInfo = async courseId => {
    const res = await api.get(`/courses/${courseId}/course-info`);

    return res;
  };

  const getCourseClasses = async courseId => {
    const {result} = await api.get(`/courses/classes?course_id=${courseId}`);

    return result;
  };

  const handleCategoryClick = categoryName => {
    // Use router.push to navigate to the category page
    router.push(`/category/${categoryName.toLowerCase()}`);
  };

  const onEnroll = async () => {
    try {
      const checkoutSession = await api.post(
        '/payment/create-checkout-session',
        {},
        {withCredentials: true},
      );
      router.push(checkoutSession.url);
    } catch (e) {
      if (e?.message === 'Unauthorized') {
        setIsShowModal(true);
      }
    }
  };

  const renderClassesList = () => {
    return (
      <Col
        style={{
          marginTop: 16,
        }}>
        <Row
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 16,
            marginTop: 16,
          }}>
          Available Classes For{' '}
          <span style={{color: 'red', marginLeft: 7}}>{course.name}:</span>
        </Row>
        <Row
          gutter={[24, 24]}
          style={{
            flex: 1,
            display: 'flex',
            padding: 60,
            background: '#d8d8d8',
          }}>
          {classes?.map(i => {
            return (
              <Col xxl={6} lg={8} md={12} xs={24}>
                <div
                  style={{
                    padding: 12,
                    borderRadius: 12,
                    backgroundColor: '#fff',
                  }}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      marginBottom: 16,
                    }}>
                    <div
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginBottom: 20,
                      }}>
                      {course.name}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        marginBottom: 8,
                      }}>
                      Start date: {convertISODate(i.startDate)}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        marginBottom: 8,
                      }}>
                      End date: {convertISODate(i.endDate)}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        marginBottom: 8,
                      }}>
                      Enrollment limit:{' '}
                      {i.enrollmentLimit == 0 ? 'No limit' : i.enrollmentLimit}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        marginBottom: 16,
                      }}>
                      Enrolled: {i.enrolled}
                    </div>
                    <Button
                      style={{
                        backgroundColor: '#fa541c',
                        color: '#fff',
                        fontWeight: 'bold',
                      }}
                      onClick={onEnroll}>
                      Enroll
                    </Button>
                  </div>
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
      <Row
        gutter={[24, 24]}
        style={{
          alignItems: 'center',
          marginBottom: 48,
          marginLeft: 60,
          marginRight: 60,
        }}>
        <Col xl={6} lg={8} md={10} sm={12} xs={24}>
          <Image preview={false} width={'100%'} src={course?.thumbnail} />
        </Col>
        <Col
          xl={17}
          lg={15}
          md={13}
          sm={11}
          xs={24}
          style={{
            marginLeft: 16,
          }}>
          <div
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              marginBottom: 16,
            }}>
            {course.name}
          </div>
          <div style={{marginTop: 4, marginBottom: 12}}>
            Description: {course?.description}
          </div>
          <div style={{fontWeight: 'bold', color: '#fa541c', marginBottom: 16}}>
            Price: {course?.price}$
          </div>
          <div style={{marginTop: 4, marginBottom: 12}}>
            Format: {course?.format}
          </div>
          <div style={{marginTop: 4, marginBottom: 12}}>
            Level: {course?.level}
          </div>
          Rating: <Rate value={course.rating} allowHalf disabled />
          <div style={{marginTop: 4, marginBottom: 12}}>
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
                  onClick={() => handleCategoryClick(category.name)}>
                  {category.name}
                </a>
                {index < course.categories.length - 1 && ','}
              </span>
            ))}
          </div>
          <div style={{marginTop: 4, marginBottom: 12}}>
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
                  onClick={() => handleCategoryClick(category.name)}>
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
      {renderCourseInformation()}
      {renderClassesList()}
      {renderReviews()}
      <Modal
        title="Notification"
        open={isShowModal}
        okText={'Login'}
        onOk={() => {
          router.push('/login');
        }}
        onCancel={() => {
          setIsShowModal(false);
        }}>
        <p>Please login for payment!</p>
      </Modal>
    </Container>
  );
};

export default CourseDetail;
