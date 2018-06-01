import React from 'react';
import { Table, Avatar, Icon, Modal, AutoComplete, Button, Input } from 'antd';
import styles from './User.less';
import Mock from 'mockjs';
import AddEditUser from './AddEditUser';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.inputSelectConsole = this.inputSelectConsole.bind(this);
  }

  onSelectChange = (selectedRowKeys) => {
    this.props.dispatch({
      type: 'user/setSelectedRowKeys',
      payload: selectedRowKeys,
    });
  };

  getRandomInt = (max, min = 0) => {
    return Math.floor(Math.random() * (max - min + 1));
  };

  searchResult =() => {
    // return ();
  };
  renderOption = (item) => {
    const Option = AutoComplete.Option;
    return (<Option key={item.key} text={item.username}>
      {item.username}
      <a href={item.address} target="_blank" ref=" noopener noreferrer" >
        {item.loginName}
      </a>
      <span className={styles.globalSearchItemCount}>约</span>
    </Option>);
  };
  setUserModalVisible = (visible) => {
    this.props.dispatch({
      type: 'user/setUserModalVisible',
      payload: visible,
    });
  };
  setUserModalOpen = (title) => {
    this.setUserModalVisible(true);
    this.props.dispatch({
      type: 'user/setUserTitle',
      payload: title,
    });
  };

  isDeleteUserInfo = () => {
    Modal.warning({
      title: '删除当前用户',
      content: '您确定要删除当前用户吗?.',
      onOk: this.deleteUser,
    });
  };

  deleteUser = () => {
    alert('成功!');
  };
  inputSelectConsole = (value) => {
    console.clear();
    console.log(value);
  }
  /**
   * 首次将会在rende之前执行
   */
  componentWillMount() {
    const random = Mock.Random;
    const data = Mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|1-700': [{
        'key|+1': 1,                                               // 属性 id 是一个自增数，起始值为 1，每次增 1
        avatar: random.image('100x100'),
        username: '@cname',                                     // 中文名称
        'loginName|1': ['jack', 'jim', 'tts', 'admin', 'liu', 'li'],  // 随机选取 1 个元素
        createTime: "@date('yyyy-MM-dd HH:mm:ss')",
        address: '@url()',
        operation: ['编辑', '删除', '查看'],
      }],
    });

    this.props.dispatch({
      type: 'user/setUserData',
      payload: data,
    });
  }


  render() {
    const columns = [{
      title: '序号',
      dataIndex: 'key',
    }, {
      title: '头像',
      dataIndex: 'avatar',
      render: text => <Avatar size="large" shape="square" src={text} />,
    }, {
      title: '用户名',
      dataIndex: 'username',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: '登陆名称',
      className: 'column-money',
      dataIndex: 'loginName',
    }, {
      title: '地址',
      dataIndex: 'address',
    }, {
      title: '创建时间',
      dataIndex: 'createTime',
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: data => <div style={{ textAlign: 'center' }}>
        <a href="javascript:;" onClick={() => this.setUserModalOpen('查看用户')}><Icon type="profile" style={{ margin: '10px', fontSize: '19px' }} /></a>
        <a href="javascript:;" onClick={() => this.setUserModalOpen('编辑用户')}><Icon type="edit" style={{ margin: '10px', fontSize: '19px' }} /></a>
        <a href="javascript:;" onClick={() => this.isDeleteUserInfo()}><Icon type="delete" style={{ margin: '10px', fontSize: '19px' }} /></a>
      </div>,
    }];


    const rowSelection = {
      selectedRowKeys: this.props.model.selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      selections: [{
        key: 'all-data',
        text: '选择全部',
        onSelect: (changableRowKeys) => {
          console.clear();
          console.log(changableRowKeys);
          this.onSelectChange([...Array(46).keys()]);
        },
      }, {
        key: 'odd',
        text: '选着偶数部分',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          this.onSelectChange(newSelectedRowKeys);
        },
      }, {
        key: 'even',
        text: '选择奇数部分',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });

          this.onSelectChange(newSelectedRowKeys);
        },
      }],
      onSelection: this.onSelection,
    };


    return (
      <div className={this.props.globalProp.userSwitch ? '' : styles.userShowSwitch}>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.props.model.bindSelectData.list}
          bordered
          title={() => <div className={styles.globalSearchWrapper} style={{ width: 300 }}><AutoComplete
            className={styles.globalSearch} size="large" style={{ width: '100%' }} dataSource={this.props.model.bindSelectData.list.map(this.renderOption)}
            onSelect={this.inputSelectConsole}
            onSearch={this.inputSelectConsole}
            placeholder="请输入要查询的用户"
            optionLabelProp="text"
          >

            <Input
              className={styles.globalInput}
              suffix={(<Button className="search-btn" size="large" type="primary">
                <Icon type="search" />
              </Button>)}
            />
          </AutoComplete></div>}
        />
        <Modal
          title={this.props.model.userTitle}
          wrapClassName="vertical-center-modal"
          visible={this.props.model.userModalVisible}
          onOk={() => this.setUserModalVisible(false)}
          onCancel={() => this.setUserModalVisible(false)}
        >
          <AddEditUser />
        </Modal>
      </div>
    );
  }
}
export default User;
