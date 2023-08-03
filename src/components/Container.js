import React from 'react';
import {Button, Col, Input, Layout, Menu, Row} from "antd";
import {LaptopOutlined, NotificationOutlined, UserOutlined} from "@ant-design/icons";

const { Header, Footer, Sider, Content } = Layout;

const styles = {
    headerStyle: {
        alignItems: 'center',
        paddingLeft: 24,
        background: "white"
    },
    contentStyle: {},
    footerStyle: {},
    navItem: {
        marginLeft: 24, marginRight: 24
    },
    inputContainer:{
        marginRight: 24
    }
}

const navItems = [
    {id: 1, name: "Lectures"},
    {id: 2, name: "Courses"},
    {id: 3, name: "About Us"},
    {id: 4, name: "Login"},
    {id: 5, name: "Join Us"},
]
const Container = ({children}) => {
    const items = navItems.map(i => (
        {
            key: i.id,
            label: i.name
        }
    ))
    return (
        <Layout>
            <Row style={styles.headerStyle}>
                <Col xl={5} style={styles.inputContainer}>
                    <Input/>
                </Col>
                <Row>
                    <Menu  mode="horizontal" defaultSelectedKeys={['1']} items={items} />
                </Row>
            </Row>
            <Content style={styles.contentStyle}>{children}</Content>
            <Footer style={styles.footerStyle}>Footer</Footer>
        </Layout>
    );
};


export default Container;
