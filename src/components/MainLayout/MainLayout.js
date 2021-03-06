import React from 'react';
import {
  Layout, Menu, Icon, Avatar, Breadcrumb,
} from 'antd';
import styles from './MainLayout.less';
import Logo from '../Logo/Logo';
import Menus from '../Menus/Menus';

const {
  Sider, Header, Content, Footer,
} = Layout;
const { SubMenu } = Menu;

class MainLayout extends React.Component {
  constructor(props, location) {
    super(props);
    this.location = location;
    this.toggle = this.toggle.bind(this);
    this.logoutOut = this.logoutOut.bind(this);
    // this.children = children;
  }

  logoutOut() {
    this.props.dispatch({
      type: 'app/logoutOut',
    });
  }

  /**
   * Control the left bar opening and closing
   */
  toggle() {
    this.props.dispatch({
      type: 'mainLayout/setCollapsed',
      payload: !this.props.model.collapsed,
    });
  }

  render() {
    return (
      <Layout className={styles.normal}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.props.model.collapsed}
          style={{ background: '#fff' }}
        >
          <Logo />
          <Menus model={this.props.model} dispatch={this.props.dispatch} />
        </Sider>
        <Layout>
          <Header
            style={{ background: '#fff', padding: 0 }}
          >
            <Icon
              className={styles.trigger}
              type={this.props.model.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />

            <div style={{ float: 'right', paddingRight: '16px', display: 'flex' }}>
              <div className={styles.emailButton}>
                <Icon type="mail" />
              </div>
              <Menu mode="horizontal" theme={this.props.model.theme} onSelect={this.logoutOut}>
                <SubMenu
                  style={{
                    float: 'right',
                  }}
                  title={(
                    <span>
                      {/* <Icon type="user" /> */}
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      {/* 你好，测试的! */}
                    </span>
)}
                >
                  <Menu.Item key="logout">
                    退出
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </div>
          </Header>
          <Content
            style={
          {
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
          }}
          >
            <Breadcrumb style={{ height: '30px' }}>
              <Breadcrumb.Item href="#tts">
                <Icon type="home" />
                <span>首页</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#tts">
                <Icon type="user" />
                <span>用户管理</span>
              </Breadcrumb.Item>
            </Breadcrumb>
            { this.props.children }
          </Content>
          <Footer className={styles.footer}>Admin-System ©2017 Created by 111111111@qq.com</Footer>
        </Layout>
      </Layout>
    );
  }
}
MainLayout.propTypes = {
  // toggle: PropTypes.func.isRequired,
};
export default MainLayout;
