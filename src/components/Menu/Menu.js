import React from 'react';
import { Menu, Icon } from 'antd';

class Menus extends React.Component {
  doMenuShow = (item) => {
      this.props.dispatch({
        type: 'mainLayout/setMenuConfig',
        payload: item.key,
      });
  };
  render() {
    return (
      <Menu theme={this.props.model.theme} mode="inline" defaultSelectedKeys={['1']} onClick={this.doMenuShow}>
        <Menu.Item key="home">
          <Icon type="home" />
          <span>首页</span>
        </Menu.Item>
        <Menu.Item key="user">
          <Icon type="user" />
          <span>用户管理</span>
        </Menu.Item>
        <Menu.Item key="role">
          <Icon type="video-camera" />
          <span>角色管理</span>
        </Menu.Item>
        <Menu.Item key="menu">
          <Icon type="upload" />
          <span>菜单管理</span>
        </Menu.Item>
      </Menu>
    );
  }
}
export default Menus;

