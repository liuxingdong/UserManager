/* eslint-disables */
import React from 'react';
import styles from './Banner.less';
/* eslint-enable */
/**
 * @author liuxingdong
 */
class Banner extends React.Component {
  render() {
    return (<div className={this.props.globalProp.bannerSwitch ? '' : styles.isShow} style={{ height: '100%', width: '100%' }}>这只是个Banner菜单</div>);
  }
}
export default Banner;
