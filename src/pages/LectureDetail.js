"use client";
import React from 'react';
import {Col, Image, Input, Layout, Menu, Pagination, Row, Space} from "antd";

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

export const LectureDetail = ({onPress})=>{

    return <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout>
            <Header style={{backgroundColor: "white"}}>
                <Row>
                    <Col span={8}>
                        <div style={{}}>
                            <Input placeholder={"Search something!"} style={{borderColor: "#555FD9", borderWidth: 2, marginRight: 12, height: 38, borderTopRightRadius: 19, borderBottomRightRadius: 19}}/>
                            <div style={{backgroundColor: "#555FD9",display: "flex",borderRadius: 18, height: 36, width: 36, position: "absolute", top:14,right: 1, justifyContent: "center", alignItems: "center"}}>
                                <Image src={iconSearch} style={{width: 24, height: 24}}  preview={false}/>
                            </div>
                        </div>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" items={tabPage.map((i, ii)=>{
                            const key = ii+1
                            return {
                                key,
                                label: i.name
                            }
                        })}/>
                    </Col>
                </Row>
            </Header>
            <Content>
                <Col style={{backgroundColor: "#E7762F",paddingTop: 40, paddingBottom: 40, marginTop: 40,marginBottom: 40, marginLeft: 40, marginRight: 40}}>
                    <Row style={{paddingLeft: 200, paddingRight:  40}}>
                        <Col style={{marginRight: 60}} span={4}>
                            <Image  width={200} src={"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"} preview={false}/>
                        </Col>

                        <Col span={16}>
                            <Row>
                                <p style={{fontSize: 36, marginBottom: 20}}>
                                    Teacher Name
                                </p>
                            </Row>
                            <Row>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis dolor id tempus elementum. Aenean et tincidunt lorem, vel rutrum ante. Sed lobortis neque quam, ac pellentesque dui semper et. Donec malesuada at leo vitae molestie. Quisque dolor risus, laoreet et nisi porta, cursus aliquam tortor. Sed ornare risus eget massa tincidunt, sit amet finibus augue rutrum. Mauris ultricies ante semper auctor tincidunt. Vestibulum sagittis felis quis metus gravida viverra. Suspendisse eget lobortis sem.

                                Nunc sit amet fringilla lectus. Maecenas orci dui, dignissim vel porta sed, aliquet euismod diam. Fusce consectetur ullamcorper consequat. Pellentesque hendrerit sapien hendrerit, interdum ligula at, faucibus enim. Nunc lacinia tellus eu metus elementum efficitur. Duis consectetur nibh quis vehicula varius. Aenean diam neque, tristique nec enim pretium, placerat semper metus. Phasellus eu vehicula tellus. Donec neque metus, faucibus ut cursus eget, efficitur eget leo. Duis nisi neque, maximus sit amet commodo a, ullamcorper id erat. Maecenas erat risus, malesuada at dictum id, bibendum et tellus. In scelerisque lorem et nibh accumsan, ut tempus arcu fringilla. In facilisis a turpis in rutrum. Maecenas in elementum risus, et lobortis nunc. Donec id egestas purus. Aenean vel iaculis dolor, sit amet sollicitudin eros.
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Row style={{marginLeft: 60, marginRight: 60, justifyContent: "center", marginBottom: 120}}>
                    <div style={{fontSize: 28, marginBottom: 24}}>
                        Courses of Teacher
                    </div>
                    <Row>
                        {[1, 2, 3, 4].map(i=>{
                            return  <Row style={{marginBottom: 24,borderRadius: 12,backgroundColor: "#ccc", justifyContent: "center", alignItems:"center", paddingTop: 32, paddingBottom :32}}>
                                <Col style={{marginRight: 60}} span={4}>
                                    <Image  width={240} src={"https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80"} preview={false}/>
                                </Col>
                                <Col span={16}>
                                    <Row>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis dolor id tempus elementum. Aenean et tincidunt lorem, vel rutrum ante. Sed lobortis neque quam, ac pellentesque dui semper et. Donec malesuada at leo vitae molestie. Quisque dolor risus, laoreet et nisi porta, cursus aliquam tortor. Sed ornare risus eget massa tincidunt, sit amet finibus augue rutrum. Mauris ultricies ante semper auctor tincidunt. Vestibulum sagittis felis quis metus gravida viverra. Suspendisse eget lobortis sem.
                                        Nunc sit amet fringilla lectus. Maecenas orci dui, dignissim vel porta sed, aliquet euismod diam. Fusce consectetur ullamcorper consequat. Pellentesque hendrerit sapien hendrerit, interdum ligula at, faucibus enim. Nunc lacinia tellus eu metus elementum efficitur. Duis consectetur nibh quis vehicula varius. Aenean diam neque, tristique nec enim pretium, placerat semper metus. Phasellus eu vehicula tellus. Donec neque metus, faucibus ut cursus eget, efficitur eget leo. Duis nisi neque, maximus sit amet commodo a, ullamcorper id erat. Maecenas erat risus, malesuada at dictum id, bibendum et tellus. In scelerisque lorem et nibh accumsan, ut tempus arcu fringilla. In facilisis a turpis in rutrum. Maecenas in elementum risus, et lobortis nunc. Donec id egestas purus. Aenean vel iaculis dolor, sit amet sollicitudin eros.
                                    </Row>
                                </Col>
                            </Row>
                        })}
                    </Row>
                    <Pagination defaultCurrent={6} total={500} />

                </Row>

                    </Content>
            {/*<Footer style={{height: 240, borderTopWidth: 8, marginTop: 40, justifyContent: "center", alignItems: "center"}}>*/}
            {/*    Footer*/}
            {/*</Footer>*/}
        </Layout>
    </Space>

}
