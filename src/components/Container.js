import React from 'react';
import {Button, Col, Image, Input, Layout, Menu, Row} from "antd";
import {LaptopOutlined, NotificationOutlined, UserOutlined} from "@ant-design/icons";

const { Header, Footer, Sider, Content } = Layout;

const iconSearch =
    "https://img.mservice.com.vn/momo_app_v2/new_version/img/appx_icon/24_navigation_search.png";

const styles = {
    headerStyle: {
        background: "white"
    },
    contentStyle: {},
    footerStyle: {},
    navItem: {
        marginLeft: 24, marginRight: 24
    },
    inputContainer:{
        borderColor: "#555FD9",
        borderWidth: 2,
        marginRight: 12,
        height: 38,
        borderTopRightRadius: 19,
        borderBottomRightRadius: 19,
    },
    iconContainer: {
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
    }
}

const tabPage = [
    { id: 1, name: "Lectures" },
    { id: 2, name: "Courses" },
    { id: 3, name: "About Us" },
    { id: 4, name: "Login" },
    { id: 5, name: "Join us" },
];
const Container = ({children}) => {
    return (
        <Layout>
            <Header style={styles.headerStyle}>
                <Row>
                    <Col span={8}>
                        <div style={{}}>
                            <Input
                                placeholder={"Search something!"}
                                style={styles.inputContainer}
                            />
                            <div
                                style={styles.iconContainer}
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
            <Content style={styles.contentStyle}>{children}</Content>
            <Footer style={styles.footerStyle}>Footer</Footer>
        </Layout>
    );
};


export default Container;
