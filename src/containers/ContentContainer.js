import React, { PureComponent } from 'react';

import { Row, Layout, Col } from 'antd';

// import SidebarComponent from '../components/Content/Sidebar/SidebarComponent';
import StepsComponent from '../components/Content/Steps/StepsComponent';

export default class ContentContainer extends PureComponent {

  render() {
    const { Content } = Layout;

    return (
        <Content>
          <Row>
            <Col span={8}></Col>
            <StepsComponent />
          </Row>
        </Content>
          );
}
