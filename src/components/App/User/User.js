import React from 'react';
import { Table ,Card, Icon ,Modal, Button, Input, AutoComplete } from 'antd';
import styles from './User.less';
import Mock  from 'mockjs';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.rowSelection = null;
    this.selectData();
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys');
    this.props.dispatch({
      type: 'user/setSelectedRowKeys',
      payload: selectedRowKeys,
    });
  };

  selectData () {
    const  selectedRowKeys  = this.props.model.selectedRowKeys;
    this.rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      selections: [{
        key: 'all-data',
        text: '选择全部',
        onSelect: (changableRowKeys) => {
          console.clear();
          console.log(changableRowKeys)
          this.onSelectChange(changableRowKeys);
        },
      }, {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          this.setState({ selectedRowKeys: newSelectedRowKeys });
        },
      }, {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          this.setState({ selectedRowKeys: newSelectedRowKeys });
        },
      }],
      onSelection: this.onSelection,
    };

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
      type:'user/setUserTitle',
      payload:title,
    })
  };
  render() {
    const columns = [{
      title: '序号',
      dataIndex: 'key',
    },{
      title: '用户名',
      dataIndex: 'username',
      render: text => <a href="#">{text}</a>,
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
      render : data => <div style={{ textAlign: 'center'}}>
        <a href="javascript:;"  onClick={() => this.setUserModalOpen("查看用户")}><Icon type='profile' style={{ margin:'10px',fontSize: '19px'}}/></a>
        <a href="javascript:;"  onClick={()=> this.setUserModalOpen("编辑用户")}><Icon type='edit' style={{ margin:'10px',fontSize: '19px'}}/></a>
        <a href="javascript:;" onClick={()=> this.setUserModalOpen("删除用户")}><Icon type='delete'  style={{ margin:'10px',fontSize: '19px'}} /></a>
      </div>,
    }];

    const data = Mock.mock({
                                                                    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|1-700': [{
          'key|+1':1,                                               // 属性 id 是一个自增数，起始值为 1，每次增 1
          'username': '@cname',                                     // 中文名称
          'loginName|1': ['jack', 'jim','tts','admin','liu','li'],  // 随机选取 1 个元素
          'createTime':"@date('yyyy-MM-dd HH:mm:ss')",
          'address':'@url()',
          'operation' : ['编辑', '删除','查看']
      }]

    });

    return (
      <div className={this.props.globalProp.userSwitch ? '' : styles.userShowSwitch}>
        <Table
          rowSelection={this.rowSelection}
          columns={columns}
          dataSource={data.list}
          bordered
          title={() =>'策划回复'}
        />
        <Modal
          title={this.props.model.userTitle}
          wrapClassName="vertical-center-modal"
          visible={this.props.model.userModalVisible}
          onOk={() => this.setUserModalVisible(false)}
          onCancel={() => this.setUserModalVisible(false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </div>
    );
  }
}
export default User;
