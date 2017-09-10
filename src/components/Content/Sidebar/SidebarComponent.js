import React, { Component } from 'react';

import { Col, Button, Menu, Icon } from 'antd';

export default class SidebarComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: false
        }
    }

    toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }

    render() {
        const SubMenu = Menu.SubMenu;
        

        return (
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
                    );
    }
}