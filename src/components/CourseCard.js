import React from 'react';
import {Button, Card, Col, Divider, Image, Rate, Row} from 'antd';
import PriceUtils from '@/utils/priceUtils';

const CourseCard = ({item, onPress}) => {
  const {
    rating,
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
  const style = {};
  let levelColor = '#34c759';

  if (level === 'intermediate') {
    levelColor = '#fa541c';
  } else if (level === 'advanced') {
    levelColor = '#f5222d';
  }

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
        <div style={{fontWeight: 'bold', marginTop: 12, marginBottom: 16}}>
          {name}
        </div>
        <div style={{marginTop: 4, marginBottom: 12}}>{description}</div>
        <div style={{fontWeight: 'bold', color: '#fa541c', marginBottom: 16}}>
          {PriceUtils.dPrice(price)}
        </div>
        <Row>
          {/*<Col span={6}>{category}</Col>*/}
          <Row>
            <Rate value={rating} allowHalf disabled />
          </Row>
        </Row>
      </Col>
      <Divider />
      <Row style={{marginBottom: 12}}>
        {categories.map(i => {
          return (
            <div
              style={{
                color: '#34c759',
                background: '#34c759' + '33',
                paddingTop: 4,
                paddingBottom: 4,
                paddingRight: 8,
                paddingLeft: 8,
                borderRadius: 16,
                marginRight: 8,
              }}>
              {i?.name}
            </div>
          );
        })}
      </Row>
      <Row>
        <Col
          style={{
            color: levelColor,
            marginBottom: 12,
            fontSize: 16,
            fontWeight: 'semibold',
          }}>
          Level: {level}
        </Col>
        <Col>{videoNum}</Col>
        <Col>{sales}</Col>
      </Row>
      <Row>
        <Button
          onClick={onPress}
          style={{
            borderRadius: 24,
            marginBottom: 12,
            background: '#fa541c',
            color: 'white',
            fontWeight: 'bold',
          }}>
          View Available Classes
        </Button>
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
