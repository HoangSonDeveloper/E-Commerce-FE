import React, {Component} from 'react';
import Container from '@/components/Container';
import {Col, Row} from 'antd';

const Main = () => {
  return (
    <Container>
      <Row></Row>
      <Col>
        <Row>
          <div>Featured Courses</div>
        </Row>
        <Row></Row>
      </Col>
      <Col>
        <Row>
          <div>Featured Courses</div>
        </Row>
        <Row></Row>
      </Col>
    </Container>
  );
};

export default Main;
