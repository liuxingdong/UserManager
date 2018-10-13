import React from 'react';
import { Menu, Icon } from 'antd';
import MenuList from '../../cofnig/MenuConfig';

class Menus extends React.Component {
  constructor(props) {
    super(props);
    this.doMenuShow = this.doMenuShow.bind(this);
  }

  doMenuShow(item) {
    this.props.dispatch({
      type: 'mainLayout/setMenuConfig',
      payload: item.key,
    });
  }

  render() {
    const mapper = (item) => {
      console.log(item);
      return (
        <Menu.Item key={item.menuFlag}>
          <Icon type={item.menuIcon} />
          <span>{item.menuName}</span>
        </Menu.Item>);
    };

    return (
      <Menu theme={this.props.model.theme} mode="inline" defaultSelectedKeys={['1']} onClick={this.doMenuShow}>
        {
          MenuList.map(mapper)
        }
      </Menu>
    );
  }
}
export default Menus;
