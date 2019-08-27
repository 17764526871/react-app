import React, { Component } from 'react';
import { Layout } from 'antd';
import AppLeftBar from './left-bar/index';
import AppTopBar from './top-bar/index';
import AppContent from './content/index';

const { Header, Sider, Content } = Layout;


class Home extends Component {
    render() {
        return (
            <div className="home-style">
                <Layout>
                    <Header>
                        <AppTopBar></AppTopBar>
                    </Header>

                    <Layout>
                        <Sider theme="light">
                            <AppLeftBar></AppLeftBar>
                        </Sider>
                        <Content>
                            <AppContent></AppContent>
                        </Content>
                    </Layout>
                </Layout>

            </div>
        );
    }
}

export default Home;