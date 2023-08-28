import React, {useState} from 'react';
import {Button, Col, Image, Row, Typography} from 'antd';

const {Text, Paragraph} = Typography;

const styles = {
  ava: {borderRadius: 12},
  card: {
    background: '#fff',
    borderRadius: 12,
    padding: 12,
    height: '100%',
  },
  name: {
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 8,
  },
  description: {
    marginBottom: 8,
  },
  position: {
    color: '#E7762F',
    marginBottom: 12,
  },
};

const LectureCard = ({item, style = {}, onClick}) => {
  const {name, description, avatar, major, rating, title} = item;
  const cardStyle = {...styles.card, style};

  const [ellipsis, setEllipsis] = useState(true);
  let ratingColor = '#34c759';

  if (rating < 7) {
    ratingColor = '#fa541c';
  } else if (rating < 5) {
    ratingColor = '#f5222d';
  }

  return (
    <Col style={styles.card}>
      <Image preview={false} width={'100%'} src={avatar} style={styles.ava} />
      <Col>
        <Text ellipsis={true} style={styles.name}>
          {name}
        </Text>
        <Paragraph
          ellipsis={{rows: 2, expandable: false}}
          style={{
            marginBottom: 8,
            fontWeight: 'bold',
          }}>
          {title}
        </Paragraph>
        <Paragraph
          ellipsis={{rows: 2, expandable: false}}
          style={styles.description}>
          {description}
        </Paragraph>

        <div style={styles.position}>{major}</div>
        <Row>
          <div style={{marginRight: 4}}> Rating:</div>
          <div
            style={{
              textAlign: 'end',
              fontWeight: 'bold',
              color: ratingColor,
            }}>
            {rating}
          </div>
        </Row>
      </Col>
      <div style={{height: 24}} />
      <Button
        onClick={onClick}
        style={{
          textAlign: 'end',
          position: 'absolute',
          bottom: 12,
          right: 12,
          fontWeight: 'bold',
          color: '#007aff',
        }}>
        More
      </Button>
    </Col>
  );
};

export default LectureCard;
