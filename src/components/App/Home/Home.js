import React from 'react';
import {
  Card, notification, List, Avatar, Icon,
} from 'antd';
import echarts from 'echarts';
import * as d3 from 'd3';
import Mock from 'mockjs';
import styles from './Home.less';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.showChart = this.showChart.bind(this);
    this.tabMessageShow = this.tabMessageShow.bind(this);
  }

  componentDidMount() {
    this.showChart();
  }

  /**
   *
   * 点赞累加函数
   * */
  giveTheThumbsUp() {
    const tts = d3.select(this).append('h1');
    tts.text('================================================');
  }

  showChart() {
    //  实例化图表容器
    /* eslint-disable-next-line */
    const Necharts = echarts.init(document.getElementById('userActive'));
    // 生成随机数据
    const data = Mock.mock({
      'list|1-10': [{
        'value|1-10000': 1000,
        name: '@cname',
      }],

    });
    //  设置图表属性
    Necharts.setOption({
      series: [
        {
          name: '南丁格尔图',
          type: 'pie',
          radius: '50%',
          roseType: 'angle',
          data: data.list,
        },
      ],
      // backgroundColor: '#2c343c',
      label: {
        textStyle: {
          color: 'rgb(255,255,255,0.3)',
        },
      },
      /* labelLine : {
        lineStyle: {
          color : "rgb(255,255,255,0.3)"
        }
      } */

    });
  }

  tabMessageShow() {
    notification.warning({
      message: '当前功能未开通!',
      description: '当前的功能并未开通，请等待更新!',
    });
  }

  render() {
    // const Step = Steps.Step;

    const IconText = ({ type, text, onClick }) => (
      <span onClick={onClick}>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );
    const data = Mock.mock({
      'list|1-10': [{
        href: '@url',
        title: '@ctitle',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: '@cparagraph(1,3)',
        content: '@csentence(1,10)',
      }],

    });
    return (
      <div className={this.props.globalProp.homeSwitch ? '' : styles.isShow} style={{ height: '100%', width: '100%' }}>
        <Card title="最新消息..." extra={<a href="#tts1" onClick={this.tabMessageShow}>了解更多</a>} style={{ width: '24%', display: 'inline-block' }}>
          {/*  <Steps direction="vertical" size="small" current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Steps> */}
        </Card>
        <Card
          title="用户活动量"
          extra={<a href="#tts1" onClick={this.tabMessageShow}>了解更多</a>}
          style={{
            width: '74%', float: 'right', display: 'inline-block', verticalAlign: 'top',
          }}
        >
          <div id="userActive" style={{ height: 400, width: 400 }} />
          <div id="locationActive" style={{ height: 400, width: 400 }} />
        </Card>
        <Card title="实时动态消息..." extra={<a href="#tts1" onClick={this.tabMessageShow}>了解更多</a>} style={{ width: '24%', display: 'inline-block', top: 30 }}>
          <List
            itemLayout="vertical"
            size="small"
            pagination={{
              onChange: (page) => {
                /* eslint-disable no-console */
                console.log(page);
                /* eslint-enable no-console */
              },
              pageSize: 3,
            }}
            dataSource={data.list}
            footer={<div>页脚</div>}
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={[<IconText type="star-o" text="0" onClick={() => this.giveTheThumbsUp} />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                extra={<img className="headPortrait" width={100} alt="logo" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                className={styles.listItem}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </List.Item>
            )}
          />
        </Card>
      </div>
    );
  }
}
export default Home;
