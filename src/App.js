import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import { Row, Col, Layout, Menu, Icon, Button, Steps, message, DatePicker, Progress, Tag, Timeline } from 'antd';

import blog from './media/img/blog.png';

import WrappedHorizontalLoginForm from './components/AuthPage';

import 'antd/dist/antd.css';  
import './App.css';

const steps = [{
  title: 'First',
  content: 'First step to make your life easier.',
}, {
  title: 'Second',
  content: 'Second step to make your life happiness.',
}, {
  title: 'Last',
  content: 'Just live.',
}];

function onChange(date, dateString) {
  console.log(date, dateString);
}

class App extends Component {
 constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
      current: 0
    }
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const { Header, Footer, Sider, Content } = Layout;
    const SubMenu = Menu.SubMenu;   
    const Step = Steps.Step; 
    const { current } = this.state;
    const { MonthPicker, RangePicker } = DatePicker;    
    
    return (
      <div>
        <Layout>

          <Header>
            <Row>
              <Col span={6}>
                <div className="blog-image">
                  <img src={blog} alt="blog" />                
                </div>
              </Col>
              <Col span={6}>
                <div className="blog-title">
                  <h1>Mern based blog</h1>
                </div>
              </Col>
              <Col span={6}></Col>
              <Col span={6}>
                <WrappedHorizontalLoginForm />
              </Col>
            </Row>
          </Header>
          <div className="wrap">
          
            <Content>
                <Row>

                  <Col span={8}>
                    <div style={{ width: 240 }}>
                      <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                        <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                      </Button>
                      <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}
                      >
                        <Menu.Item key="1">
                          <Icon type="pie-chart" />
                          <span>Statistics</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                          <Icon type="desktop" />
                          <span>Preview</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                          <Icon type="inbox" />
                          <span>All messages</span>
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Sorted messages</span></span>}>
                          <Menu.Item key="5">Option 5</Menu.Item>
                          <Menu.Item key="6">Option 6</Menu.Item>
                          <Menu.Item key="7">Option 7</Menu.Item>
                          <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Plugins</span></span>}>
                          <Menu.Item key="9">Option 9</Menu.Item>
                          <Menu.Item key="10">Option 10</Menu.Item>
                          <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                          </SubMenu>
                        </SubMenu>
                      </Menu>
                    </div>
                  </Col>

                  <Col span={8}>
                    <div className="blog-steps">
                      <Steps current={current}>
                        {steps.map(item => <Step key={item.title} title={item.title} />)}
                      </Steps>
                      <div className="steps-content">{steps[this.state.current].content}</div>
                      <div className="steps-action">
                        {
                          this.state.current < steps.length - 1
                          &&
                          <Button type="primary" onClick={() => this.next()}>Next</Button>
                        }
                        {
                          this.state.current === steps.length - 1
                          &&
                          <Button type="primary" onClick={() => message.success('Your life is started here!')}>Got it!</Button>
                        }
                        {
                          this.state.current > 0
                          &&
                          <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                            Previous
                          </Button>
                        }
                      </div>
                    </div>
                  </Col>

                  <Col span={8}>
                  </Col>

              </Row>
            </Content>

            <Footer>
              <Row>
                <Col span={8}>
                  <div className="blog-timeline">
                    <Timeline>
                      <Timeline.Item color="green">Create a component architecture</Timeline.Item>
                      <Timeline.Item color="red">Implement Routing</Timeline.Item>
                      <Timeline.Item color="red">Associate a frontend with a backend</Timeline.Item>
                      <Timeline.Item color="red">Add restify/typescript </Timeline.Item>
                    </Timeline>
                  </div>
                </Col>

                <Col span={8}>
                  <div className="blog-progress-bar">
                    <Progress type="circle" percent={10} />
                  </div>
                  <div className="blog-tags">
                  <h4 style={{ margin: '16px 0' }}>Tags:</h4>
                  <Tag color="red">tag1</Tag>
                    <Tag color="pink">tag2</Tag>
                    <Tag color="orange">tag3</Tag>
                    <Tag color="green">tag4</Tag>
                  </div>
                </Col>

                <Col span={8}>
                  <div className="blog-date-picker">
                    <DatePicker onChange={onChange} />
                    <br />
                    <MonthPicker onChange={onChange} placeholder="Select month" />
                    <br />
                  </div>
                </Col>
              </Row>
            </Footer>
            </div>            
        </Layout>
      </div>
    );
  }
}

export default App;
