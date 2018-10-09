/* eslint-disables */
import React from 'react';
import styles from './Menu.less';
/**
 * @author liuxingdong
 */
class Menu extends React.Component {
  render() {
    return (<div className={this.props.globalProp.menuSwitch ? '' : styles.isShow} style={{ height: '100%', width: '100%' }}>这只是个测试</div>);
  }
}
export default Menu;
