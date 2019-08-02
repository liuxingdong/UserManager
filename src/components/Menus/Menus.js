import React from 'react';
import { Menu, Icon } from 'antd';
import MenuList from '../../config/MenuConfig';

const { SubMenu } = Menu;
/**
 * 菜单组件
 */
class Menus extends React.Component {
  constructor(props) {
    super(props);
    this.doMenuShow = this.doMenuShow.bind(this);
  }

  /**
   * 点击菜单触发菜单跳转
   * @param {*} item
   */
  doMenuShow(item) {
    console.log(item);
    this.props.dispatch({
      type: 'mainLayout/setMenuConfig',
      payload: item.key,
    });
  }

  /**
   *渲染子订单
   *
   * @memberof Menus
   */
  renderChildMenu= (list) => {
    return list.map((item ,index) => {
      if (item.child) {
        return (
          <SubMenu 
            key={item.menuId}  
            title={
              <span>
                <Icon type={item.menuIcon} />
                <span>{item.menuName}</span>
              </span>
            }
          >
            {
              this.renderChildMenu(item.child)  
            }
          </SubMenu>   
        );
      } else {
        return (
          <Menu.Item key={item.menuId}>
            <Icon type={item.menuIcon} />
            <span>{item.menuName}</span>
          </Menu.Item>
        );
      }
    });
  }


  render() {
    return (
      <Menu theme={this.props.model.theme} mode="inline" defaultSelectedKeys={['1']} onClick={this.doMenuShow}>
        {
         this.renderChildMenu(MenuList)
        }
      </Menu>
    );
  }
}
export default Menus;
