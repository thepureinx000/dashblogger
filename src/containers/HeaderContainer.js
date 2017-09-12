import React, { PureComponent } from 'react';

import { Row, Col, Layout } from 'antd';

import Title from '../components/Header/Title';
import Logo from '../components/Header/Logo';
import AuthComponent from '../components/Header/AuthComponent';

import blog from '../media/img/blog.png';

export default class HeaderContainer extends PureComponent {
    render() {
        const { Header } = Layout;
        
        return (
            <Header>
                <Row>
                <Col span={6}>
                    <Logo blogImage={blog}/>                
                </Col>
                <Col span={6}>
                    <Title text={'Mern based blog'} />
                </Col>
                <Col span={6}></Col>
                <Col span={6}>
                    <AuthComponent />
                </Col>
                </Row>
            </Header>
        );
    }
}







