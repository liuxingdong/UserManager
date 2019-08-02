/* eslint-disables */
import React from 'react';
import {
  Table, Avatar, Icon, Modal, Popconfirm, message, Button, Input, Select, Row, Col,
} from 'antd';
import Mock from 'mockjs';
import styles from './Orders.less';
import OrdersInfo from './OrdersInfo';
/* eslint-enable */
/**
 * @author liuxingdong
 */
class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.searchResult = this.searchResult.bind(this);
    this.isDeleteUserInfo = this.isDeleteUserInfo.bind(this);
    this.goodsTableList = this.goodsTableList.bind(this);
    this.confirm = this.confirm.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  /**
   * 首次将会在rende之前执行
   */
  componentWillMount() {
    const random = Mock.Random;
    const data = Mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|1-700': [{
        'key|+1': 1, // 属性 id 是一个自增数，起始值为 1，每次增 1
        orderNumber: random.image('100x100'),
        ordersTime: "@date('yyyy-MM-dd HH:mm:ss')",
        'payWay|1': ['wechat', 'alipay-circle', 'apple', 'android'],
        ordersPrie: '@float(60, 100, 3, 5)',
        actualPayment: '@float(60, 100, 3, 5)',
        operation: ['编辑', '删除', '查看'],
      }],
    });

    this.props.dispatch({
      type: 'orders/setOrdersData',
      payload: data,
    });
  }


  /* eslint-disable */
  getRandomInt = (max, min = 0) => {
    return Math.floor(Math.random() * (max - min + 1));
  };
   /* eslint-enable */

 


  isDeleteUserInfo() {
    Modal.warning({
      title: '删除当前用户',
      content: '您确定要删除当前用户吗?.',
      onOk: this.deleteUser,
    });
  }

  confirm(e) {
    console.log(e);
    message.success('Click on Yes');
  }

  cancel(e) {
    console.log(e);
    message.error('Click on No');
  }

  goodsTableList() {
    const goods = [{
      title: '商品编号',
      dataIndex: 'key',
    }, {
      title: '商品图片',
      dataIndex: 'goodsImage',
      render: text => <Avatar size="large" shape="square" src={text} />,
    }, {
      title: '商品数量',
      dataIndex: 'goodsCount',
    }, {
      title: '商品类型',
      className: 'column-money',
      dataIndex: 'goodsType',
    }, {
      title: '商品规格',
      dataIndex: 'goodsSpecification',
    }, {
      title: '商品单价',
      dataIndex: 'goodsPrie',
    }, {
      title: '商品名称',
      dataIndex: 'goodsName',
    }];

    const goodsValue = Mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|1-700': [{
        'key|+1': 1, // 属性 id 是一个自增数，起始值为 1，每次增 1
        goodsImage: Mock.Random.image('200x100'),
        goodsCount: '@natural(60, 100)',
        goodsType: '@cname', // 中文名称
        'goodsSpecification|1': ['jack', 'jim', 'tts', 'admin', 'liu', 'li'], // 随机选取 1 个元素
        goodsPrie: '@float(60, 100)',
        goodsName: '@cword(3)',
      }],
    });

    console.log(goodsValue);
    return (
      <Table
        columns={goods}
        dataSource={goodsValue.list}
        pagination={false}
      />
    );
  }

  handleOk = () => {
    this.props.dispatch({
      type: 'orders/setLoadingModel',
      payload: true,
    });
    setTimeout(() => {
      this.props.dispatch({
        type: 'orders/setOpenModel',
        payload: false,
      });
      this.props.dispatch({
        type: 'orders/setLoadingModel',
        payload: false,
      });
    }, 3000);
  }

  handleCancel = () => {
    this.props.dispatch({
      type: 'orders/setOpenModel',
      payload: false,
    });
  }

  searchResult() {
    // return ();
  }

  catOrdersInfo(title) {
    this.props.dispatch({
      type: 'orders/setOpenModel',
      payload: true,
    });
    this.props.dispatch({
      type: 'orders/setOrdersInfoTitle',
      payload: title,
    });
  }

  render() {
    const columns = [{
      title: '序号',
      dataIndex: 'key',
    }, {
      title: '订单编号',
      dataIndex: 'orderNumber',
    }, {
      title: '下单时间',
      dataIndex: 'ordersTime',
      render: text => <a>{text}</a>,
    }, {
      title: '支付方式',
      className: 'column-money',
      dataIndex: 'payWay',
      render: text => <Avatar shape="square" size="large" icon={text} />,
    }, {
      title: '订单金额',
      dataIndex: 'ordersPrie',
    }, {
      title: '实际付款',
      dataIndex: 'actualPayment',
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: () => (
        <div style={{ textAlign: 'center' }}>
          <a onClick={() => this.catOrdersInfo('订单详情')}><Icon type="profile" style={{ margin: '10px', fontSize: '19px' }} /></a>
          <a>
            <Popconfirm title="取消前请与用户联系?" onConfirm={this.confirm} onCancel={this.cancel} okText="Yes" cancelText="No">
              <Icon type="delete" style={{ margin: '10px', fontSize: '19px' }} />
            </Popconfirm>
          </a>
        </div>
      ),
    }];
    const { Search } = Input;
    const { Option } = Select;
    return (
      <div className={this.props.globalProp.ordersSwitch ? '' : styles.isShow}>
        <Table
          className="components-table-demo-nested"
          columns={columns}
          dataSource={this.props.model.bindTableData.list}
          expandedRowRender={this.goodsTableList}
          bordered
          title={() => (
            <Row>
              <Col span={6}>
                <Search
                  placeholder="请输入订单编号"
                  onSearch={value => console.log(value)}
                  enterButton="Search"
                />
              </Col>
              <Col span={6}>
              
              </Col>
            </Row>)}
        />
        <Modal
          visible={this.props.model.openModel}
          title={this.props.model.ordersInfoTitle}
          onOk={this.handleOk}
          width="800px"
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>返回</Button>,
            <Button key="submit" type="primary" loading={this.props.model.loadingModel} onClick={this.handleOk}>
              提交
            </Button>,
          ]}
        >
          <OrdersInfo />
        </Modal>
      </div>
    );
  }
}
export default Orders;
