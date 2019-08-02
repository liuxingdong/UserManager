/* eslint-disables */
import React from 'react';
import styles from './Goods.less';
/* eslint-enable */
/**
 * @author liuxingdong
 */
class Goods extends React.Component {
  render() {
    return (<div className={this.props.globalProp.goodsSwitch ? '' : styles.isShow} style={{ height: '100%', width: '100%' }}>这只是个商品类</div>);
  }
}
export default Goods;
