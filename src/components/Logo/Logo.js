/* eslint-disable linebreak-style */
import React from 'react';
import styles from './Logo.less';
import systeImage from '../../assets/yay.jpg';


class Logo extends React.Component {
  render() {
    return (
      <div className={styles.logo}>
        <img src={systeImage} style={{ width: '40px' }} alt="logo" />
        <span>Admin System</span>
      </div>
    );
  }
}
export default Logo;
