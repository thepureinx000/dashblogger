import React, { Component } from 'react';

import { Layout, Col, Row } from 'antd';

import HeaderContainer from './containers/HeaderContainer';
import ContentContainer from './containers/ContentContainer';
import FooterContainer from './containers/FooterContainer';
import SidebarComponent from './components/Content/Sidebar/SidebarComponent';

import 'antd/dist/antd.css';
import './App.css';

export default class App extends Component {
  state = {
    collapsed: false
  };
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  render() {
    const { Sider } = Layout;

    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <SidebarComponent />
          </Sider>
          <Layout>
            <HeaderContainer />
            <ContentContainer />
            <FooterContainer />
          </Layout>
        </Layout>
      </div>
    );
  }
}
