import React from 'react';
import {
  Form, Input, Tooltip, DatePicker, Icon, Select,
} from 'antd';

class AddEditUser extends React.Component {
  handleAddEditUserSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const FormItem = Form.Item;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        span: 6,
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        span: 14,
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(/* eslint-disable */<Select style={{ width: 70 }}>
      <Option value="86">+86</Option>
      <Option value="87">+87</Option>
       </Select>);
    /* eslint-enable */
    const config = {
      rules: [{ type: 'object', required: true, message: '请选择时间!' }],
    };

    return (
      <Form onSubmit={() => this.handleAddEditUserSubmit}>
        <FormItem
          {...formItemLayout}
          label="邮箱地址"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: '邮件格式不合法!',
            }, {
              required: true, message: '请输入邮件地址!',
            }],
          })(<Input />)}
        </FormItem>
        {/* 昵称 */}
        <FormItem
          {...formItemLayout}
          label={(
            <span>
             昵称&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
        )}
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: '请输入您的昵称!', whitespace: true }],
          })(<Input />)}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="手机号码"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="创建时间"
        >
          {getFieldDecorator('date-time-picker', config)(<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />)}
        </FormItem>
      </Form>
    );
  }
}
export default Form.create()(AddEditUser);
