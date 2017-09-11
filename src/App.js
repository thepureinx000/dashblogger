import React, { Component } from 'react';

import { Layout, Col, Row } from 'antd';

import HeaderContainer from './containers/HeaderContainer';
import ContentContainer from './containers/ContentContainer';
import FooterContainer from './containers/FooterContainer';

import 'antd/dist/antd.css';  
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <HeaderContainer />
          <div className="wrap">
            <ContentContainer />
            <FooterContainer />
          </div>  
        </Layout>
      </div>
    );
  }
}

export default App;
