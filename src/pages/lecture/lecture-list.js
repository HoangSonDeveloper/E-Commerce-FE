"use client";

import React from "react";
import { Col, Image, Input, Layout, Menu, Pagination, Row, Space } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const tabPage = [
  { id: 1, name: "Lectures" },
  { id: 2, name: "Courses" },
  { id: 3, name: "About Us" },
  { id: 4, name: "Login" },
  { id: 5, name: "Join us" },
];

const avatar = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2264&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
];

const iconSearch =
  "https://img.mservice.com.vn/momo_app_v2/new_version/img/appx_icon/24_navigation_search.png";

const LectureList = (props) => {
  const { onPress } = props;
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <Header style={{ backgroundColor: "white" }}>
          <Row>
            <Col span={8}>
              <div style={{}}>
                <Input
                  placeholder={"Search something!"}
                  style={{
                    borderColor: "#555FD9",
                    borderWidth: 2,
                    marginRight: 12,
                    height: 38,
                    borderTopRightRadius: 19,
                    borderBottomRightRadius: 19,
                  }}
                />
                <div
                  style={{
                    backgroundColor: "#555FD9",
                    display: "flex",
                    borderRadius: 18,
                    height: 36,
                    width: 36,
                    position: "absolute",
                    top: 14,
                    right: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={iconSearch}
                    style={{ width: 24, height: 24 }}
                    preview={false}
                  />
                </div>
              </div>
            </Col>
            <Col span={16}>
              <Menu
                mode="horizontal"
                items={tabPage.map((i, ii) => {
                  const key = ii + 1;
                  return {
                    key,
                    label: i.name,
                  };
                })}
              />
            </Col>
          </Row>
        </Header>
        <Content>
          <Col
            style={{
              backgroundColor: "#E7762F",
              paddingBottom: 60,
              marginBottom: 60,
            }}
          >
            <Row>
              <h1
                style={{
                  textTransform: "uppercase",
                  fontSize: 28,
                  marginTop: 40,
                  marginBottom: 40,
                  fontWeight: "bold",
                  textAlign: "center",
                  flex: 1,
                }}
              >
                Featured Lectures
              </h1>
            </Row>
            <Row style={{ paddingLeft: 200, paddingRight: 40 }}>
              <Space size={40} style={{ overflow: "scroll" }}>
                {avatar.map((i) => {
                  return (
                    <Image
                      onClick={() => onPress(true)}
                      style={{ height: 300, width: 200 }}
                      src={i}
                      preview={false}
                    />
                  );
                })}
              </Space>
            </Row>
          </Col>
          <Row
            style={{
              width: "90%",
              justifyContent: "center",
              backgroundColor: "#ccc",
              marginLeft: "5%",
              paddingTop: 100,
              paddingBottom: 100,
            }}
          >
            <div
              style={{ width: "80%", alignSelf: "center", marginBottom: 40 }}
            >
              <Col style={{ marginBottom: 120 }}>
                <div
                  style={{ fontSize: 24, fontWeight: "bold", marginBottom: 24 }}
                >
                  Field
                </div>
                <Space size={40} style={{ overflow: "scroll" }}>
                  {avatar.map((i) => {
                    return (
                      <Image
                        style={{ height: 300, width: 200, borderRadius: 12 }}
                        src={i}
                        preview={false}
                      />
                    );
                  })}
                </Space>
              </Col>
              <Row>
                <div
                  style={{ fontSize: 24, fontWeight: "bold", marginBottom: 24 }}
                >
                  Field
                </div>
                <Space size={40} style={{ overflow: "scroll" }}>
                  {avatar.map((i) => {
                    return (
                      <Image
                        style={{ height: 300, width: 200, borderRadius: 12 }}
                        src={i}
                        preview={false}
                      />
                    );
                  })}
                </Space>
              </Row>
            </div>
            <Pagination defaultCurrent={6} total={500} />
          </Row>
        </Content>
        {/*<Footer style={{height: 240, borderTopWidth: 8, marginTop: 40, justifyContent: "center", alignItems: "center"}}>*/}
        {/*    Footer*/}
        {/*</Footer>*/}
      </Layout>
    </Space>
  );
};

export default LectureList
