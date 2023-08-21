import React from 'react';
import {Button, Card, Col, Divider, Image, Rate, Row} from 'antd';
import PriceUtils from '@/utils/priceUtils';

const CourseCard = ({item}) => {
  const {
    starNum,
    name,
    categories,
    time,
    sales,
    videoNum,
    thumbnail,
    price,
    level,
    outcome,
    description,
  } = item;
  console.log(item);
  const style = {};
  return (
    <Col style={styles.card}>
      <Image
        preview={false}
        width={'100%'}
        height={200}
        src={thumbnail}
        style={styles.ava}
      />
      <Col>
        <div style={{fontWeight: 'bold', marginTop: 12, marginBottom: 4}}>
          {name}
        </div>
        <div style={{marginTop: 4, marginBottom: 4}}>{description}</div>
        <div style={{fontWeight: 'bold', color: '#fa541c'}}>
          {PriceUtils.dPrice(price)}
        </div>
        <Row>
          {/*<Col span={6}>{category}</Col>*/}
          <Row>
            <Rate value={starNum} allowHalf disabled />
          </Row>
        </Row>
      </Col>
      <Divider />
      <Row>
        <Col>{level}</Col>
        <Col>{videoNum}</Col>
        <Col>{sales}</Col>
      </Row>
      <Row>
        <Button>Join Course</Button>
      </Row>
    </Col>
  );
};

const styles = {
  ava: {borderRadius: 12, marginBottom: 12},
  card: {
    background: '#fff',
    borderRadius: 12,
    padding: 12,
    height: '100%',
    paddingTop: 12,
  },
};

export default CourseCard;
