import React, { Component } from 'react';

import { Row, Layout } from 'antd';

import SidebarComponent from '../components/Content/Sidebar/SidebarComponent';
import StepsComponent from '../components/Content/Steps/StepsComponent';

export default class ContentContainer extends Component {
      render() {
        const { Content } = Layout;
        
        return (
            <Content>
              <Row>
                <SidebarComponent />
                <StepsComponent />
              </Row>
            </Content>
        );
      }
}