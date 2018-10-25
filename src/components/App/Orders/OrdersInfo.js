import React from 'react';
import {
  Row, Col, Rate, Carousel,
} from 'antd';
import Mock from 'mockjs';

class OrdersInfo extends React.Component {
  render() {
    return (
      <div>
        <Row type="flex" justify="center">
          <Col span={3}>订单编号:</Col>
          <Col span={7}>434343434</Col>
          <Col span={3} offset={3}>下单时间:</Col>
          <Col span={7}>2018年10月19日 08点38分</Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={3}>支付时间:</Col>
          <Col span={7}>2018年10月19日 08点38分</Col>
          <Col span={3} offset={3}>发货时间:</Col>
          <Col span={7}>2018年10月19日 08点38分</Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={3}>收货时间:</Col>
          <Col span={7}>2018年10月19日 08点38分</Col>
          <Col span={3} offset={3}>订单状态:</Col>
          <Col span={7}>545454545</Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={3}>用户评分:</Col>
          <Col span={7}><Rate disabled defaultValue={2} /></Col>
          <Col span={3} offset={3}>发货状态:</Col>
          <Col span={7}>434343434</Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={3}>商品信息:</Col>
          <Col span={7}>434343434</Col>
          <Col span={3}>
            <Carousel autoplay>
              <div>{ Mock.Random.image('200x100', '#894FC4', '#FFF', 'png', '!') }</div>
              <div>{ Mock.Random.image('200x100', '#894FC4', '#FFF', 'png', '!') }</div>
              <div>{ Mock.Random.image('200x100', '#894FC4', '#FFF', 'png', '!') }</div>
              <div>{ Mock.Random.image('200x100', '#894FC4', '#FFF', 'png', '!') }</div>
            </Carousel>
          </Col>
          <Col span={7}>434343434</Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={3}>收货信息:</Col>
          <Col span={7}>434343434</Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={3}>发票类型:</Col>
          <Col span={7}>434343434</Col>
          <Col span={3} offset={3}>发票抬头:</Col>
          <Col span={7}>545454545</Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={3}>发票内容:</Col>
          <Col span={7}>434343434</Col>
          <Col span={3} offset={3}>支付方式:</Col>
          <Col span={7}>545454545</Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={3}>实付金额:</Col>
          <Col span={7}>434343434</Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={3}>用户姓名:</Col>
          <Col span={7}>434343434</Col>
          <Col span={3} offset={3}>手机号:</Col>
          <Col span={7}>545454545</Col>
        </Row>
      </div>
    );
  }
}
export default OrdersInfo;
