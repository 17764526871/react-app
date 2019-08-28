import React, { Component } from 'react';

import { Row, Col, Icon, Avatar, Badge } from 'antd';
class Conent extends Component {

    render() {
        return (
            <div className="app-top-bar">
                <Row >
                    <Col span={4}>
                        <div className="logo">
                            <span>REACT</span>
                            <span>APP</span>
                        </div>
                    </Col>
                    <Col span={16}>

                    </Col>
                    <Col span={4}>
                        <div className="user-info">
                            <span className="share">
                                <Icon type="share-alt" />
                            </span>
                            <Badge count={99}>
                                <span className="message">
                                    <Icon type="bell" />
                                </span>
                            </Badge>
                            <span className="user">
                                <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
                                <span className="name">
                                    jack
                                </span>
                            </span>
                            <span className="langrage">
                                <Icon type="global" />
                            </span>

                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Conent;