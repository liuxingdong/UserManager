import React from 'react';
import { Carousel ,Card } from 'antd';
import styles from './Home.css';
import * as d3 from "d3";
import img1 from '../../../assets/image/time01.jpg';
import img2 from '../../../assets/image/time02.jpg';
import img3 from '../../../assets/image/time03.jpg';
import img4 from '../../../assets/image/time04.jpg';
import img5 from '../../../assets/image/time05.jpg';

class Home extends React.Component {
  constructor(props) {
    super(props);

    // this.showChart();
  }

  showChart() {
    console.log("==============测试d3====================");
    let styk = d3.select(".reset").attr("style");
    console.log(styk)
    console.log("===================测试结束================");

  }
  render() {

    return (
      <div className={this.props.globalProp.homeSwitch ? '' : styles.isShow} style={{height:'100%',width:'100%'}}>
        {/*<Card  hoverable>*/}
            {/*<Carousel className={styles.antCarousel} autoplay>
              <div style={{ height : '100%',width: '100%'}}><img style={{ height : '100%',width: '100%'}} src={img1} alt=""/></div>
              <div style={{ height : '100%',width: '100%'}}><img style={{ height : '100%',width: '100%'}} src={img2} alt=""/></div>
              <div style={{ height : '100%',width: '100%'}}><img style={{ height : '100%',width: '100%'}} src={img3} alt=""/></div>
              <div style={{ height : '100%',width: '100%'}}><img style={{ height : '100%',width: '100%'}} src={img4} alt=""/></div>
              <div style={{ height : '100%',width: '100%'}}><img style={{ height : '100%',width: '100%'}} src={img5} alt=""/></div>
          </Carousel>*/}
        {/*</Card>*/}
      </div>
    );
  }
}
export default Home;
