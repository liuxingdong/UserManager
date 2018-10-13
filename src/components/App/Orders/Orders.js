/* eslint-disables */
import React from 'react';
import styles from './Orders.less';
/* eslint-enable */
/**
 * @author liuxingdong
 */
class Orders extends React.Component {
  render() {
    return (<div className={this.props.globalProp.ordersSwitch ? '' : styles.isShow} style={{ height: '100%', width: '100%' }}>这只是个订单</div>);
  }
}
export default Orders;
