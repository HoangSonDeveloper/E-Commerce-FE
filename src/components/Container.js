import React, {useEffect, useState} from 'react';
import {Button, Col, Image, Input, Layout, Menu, Row} from 'antd';
import {
  LaptopOutlined,
  MenuOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {useRouter} from 'next/router';
import Cookies from 'js-cookie';

const {Header, Footer, Sider, Content} = Layout;

const iconSearch =
  'https://img.mservice.com.vn/momo_app_v2/new_version/img/appx_icon/24_navigation_search.png';

const styles = {
  headerStyle: {
    background: 'white',
    marginBottom: 48,
  },
  contentStyle: {background: 'white'},
  footerStyle: {background: 'white'},
  navItem: {
    marginLeft: 24,
    marginRight: 24,
  },
  inputContainer: {
    borderColor: '#555FD9',
    borderWidth: 2,
    marginRight: 12,
    height: 38,
    borderTopRightRadius: 19,
    borderBottomRightRadius: 19,
  },
  iconContainer: {
    backgroundColor: '#555FD9',
    display: 'flex',
    borderRadius: 18,
    height: 36,
    width: 36,
    position: 'absolute',
    top: 14,
    right: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Container = ({children}) => {
  const router = useRouter();
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")))
  }, []);

  const tabPage = [
    {id: 3, name: 'Featured Lecturers', key: 'lecturer'},
    {id: 4, name: 'Featured Courses', key: 'course'},
  ];

  user ? tabPage.unshift({id: 1, name: `Welcome back, ${user.user?.name}!`, key: 'profile'}) && tabPage.push(
    {id: 5, name: 'Log out', key: 'logout'}
  ) : tabPage.push(
    {id: 1, name: 'Login', key: 'login'},
    {id: 2, name: 'Join us', key: 'signup'});

  return (
    <Layout style={{background: 'white'}}>
      <Header style={styles.headerStyle}>
        <Row>
          <Col xxl={14} md={12} xs={4}>
            <Menu
              mode="horizontal"
              overflowedIndicator={<MenuOutlined />}
              items={tabPage?.map?.((i, ii) => {
                return {
                  key: i.key,
                  label: i.name,
                  onClick: () => {
                    router.push(`/${i.key}`);
                  },
                };
              })}
            />
          </Col>
          <Col xxl={10} md={12} xs={20}>
            <div style={{}}>
              <Input
                placeholder={'Search something!'}
                style={styles.inputContainer}
              />
              <div style={styles.iconContainer}>
                <Image
                  src={iconSearch}
                  style={{width: 24, height: 24}}
                  preview={false}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Header>
      <Content style={styles.contentStyle}>{children}</Content>
      {/*<Footer style={styles.footerStyle}>Footer</Footer>*/}
    </Layout>
  );
};

export default Container;
