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
import CourseCard from '@/components/CourseCard';
import { DotLoader } from 'react-spinners';

const {Header, Footer, Sider, Content} = Layout;

const LectureList = props => {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    initData();
    setLoading(false);
  }, []);

  const onGoDetail = (item, e) => {
    e.preventDefault();
    router.push({pathname: '/lecturer/detail', query: {id: item?.id ?? ''}});
  };

  const initData = async () => {
    const categories = await api.get('/courses/categories')
    setCategories(categories)
    console.log(categories);
    const courses = await Promise.all(categories?.map(async (category) => {
      const {result} = await api.get(`/courses?filterBy=category_id:${category?.id}`);
      return result;
    }))
    console.log(courses);
    setCourses(courses)
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
          featured Courses
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
          {
            categories?.map((category, index) => {
                return (
                    <Col md={24} xs={24} key={index}>
                        <div style={{background: '#fff', padding: 24}}>
                            <div
                                style={{
                                    textTransform: 'uppercase',
                                    fontSize: 32,
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    marginBottom: 24,
                                }}>
                                {category.name}
                            </div>
                            {courses[index]?.map((course, ii) => {
                                return (
                                    <Row sm={12} xs={24} lg={8} xl={6} xxl={4}>
                                        <CourseCard
                                            item={course}
                                            onClick={e => {
                                                onGoDetail(course, e);
                                            }}
                                        />
                                    </Row>
                                );
                            })}
                        </div>
                    </Col>
                )
            })
          }
        </Row>
      </div>
    );
  };

  if (loading) {
    return <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <DotLoader color="#36d7b7" />
        </div>;
  }

  return <Container>{renderFeatured()}</Container>;
};

export default LectureList;
