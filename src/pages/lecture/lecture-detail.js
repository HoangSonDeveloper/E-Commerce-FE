"use client";
import React from 'react';
import {Col, Image, Input, Layout, Menu, Pagination, Row, Space} from "antd";
import Container from "@/components/Container";

const { Header, Footer, Sider, Content } = Layout;

const tabPage = [
    {id: 1, name: "Lectures"},
    {id: 2, name: "Courses"},
    {id: 3, name: "About Us"},
    {id: 4, name: "Login"},
    {id: 5, name: "Join us"},
]

const avatar = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2264&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
]

const iconSearch = "https://img.mservice.com.vn/momo_app_v2/new_version/img/appx_icon/24_navigation_search.png"

const LectureDetail = ({onPress})=>{
    return <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Container>

        </Container>
    </Space>

}

export default LectureDetail
