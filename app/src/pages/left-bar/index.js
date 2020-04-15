import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';
import { Link } from "react-router-dom";

const { SubMenu } = Menu;


class Conent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        console.log(window.location.hash.slice(2))
        return (
            <div className="left-bar">

                    <Menu
                        className="menu-style"
                        defaultSelectedKeys={[window.location.hash.slice(2)]}
                        defaultOpenKeys={[]}
                        mode="inline"
                        onSelect={(item) => {
                            console.log(item);

                        }}
                    >
                        <Menu.Item key="home">
                            <Link to="/home">
                                <Icon type="home" /><span style={{ fontWeight: 'bold' }}>首页</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="home1">
                            <Link to="/home1">
                                <Icon type="idcard" /><span style={{ fontWeight: 'bold' }}>用户</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="home2">
                            <Link to="/home1">
                                <Icon type="pie-chart" /><span style={{ fontWeight: 'bold' }}>数据</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span style={{ fontWeight: 'bold' }}>
                                    <Icon type="appstore" />
                                    <span>其他</span>
                                </span>
                            }
                        >
                            <Menu.Item key="todolist">
                                <Link to="/todolist">
                                    <span style={{ fontWeight: 'bold' }}>任务列表</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="12">
                                <Link to="/todolist">
                                    <span style={{ fontWeight: 'bold' }}>统计</span>
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
            </div>

        );
    }
}

export default Conent;