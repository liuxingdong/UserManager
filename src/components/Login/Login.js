import React from 'react';
import style from './Login.css';
import { Form, Spin, Checkbox, Icon, Input, Select, Tabs, Button } from 'antd';
import DocumentTitle from 'react-document-title';
import PropTypes from 'prop-types';
import logoImg from '../../assets/yay.jpg';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
    this.showErrorTip = this.showErrorTip.bind(this);
    this.onKeyPressLogin = this.onKeyPressLogin.bind(this);
  }
  handleSubmit = (e) => {
    this.props.form.validateFields((err, values) => {
      this.props.handleLogin(err, values);
    });
  }
  onKeyPressLogin(event) {
    /**
     *  If you click the keyboard return key,
     *  execute the landing
     */
    if (event.which === 13) {
      this.handleSubmit();
    }
  }
  showErrorTip = () => {
    message.error(this.props.errorTip);
  };
  render() {
    const FormItem = Form.Item;
    const TabPane = Tabs.TabPane;
    const InputGroup = Input.Group;
    const Option = Select.Option;

    const { getFieldDecorator } = this.props.form;

    const selectBefore = (<Select defaultValue="86">
      <Option value="81">+86</Option>
      <Option value="Option2">+81</Option>
    </Select>);
    return (
      <div className={style.loginPage}>
        <DocumentTitle title="管理台" />
        <div className={style.loginBox}>
          <img src={logoImg} alt="logo" className={style.logo} />
          <Spin spinning={this.state.loading} size="large">
            <Form className={style.loginForm} onKeyPress={this.onKeyPressLogin}>
              <Tabs defaultActiveKey="2">
                <TabPane tab={<span><Icon type="apple" />账号密码登录</span>} key="1">
                  <FormItem>
                    {getFieldDecorator('username', {
                      rules: [
                        {
                          required: true,
                          message: '请输入账户名',
                        },
                      ],
                    })(
                      <Input placeholder="账户" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} className={style.antInput} />,
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('password', {
                      rules: [
                        {
                          required: true,
                          message: '请输入密码',
                        },
                      ],
                    })(
                      <Input autoComplete="off" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} className={style.antInput} type="password" placeholder="密码" />,
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('remember', {
                      valuePropName: 'checked',
                      initialValue: false,
                    })(
                      <Checkbox>Remember me</Checkbox>,
                    )}
                    <a className="login-form-forgot" onClick={this.props.updatePasswordViewShow}>Forgot password</a>
                    <Button type="primary" className={style.antBtn} onClick={this.handleSubmit}>登录</Button>
                    Or <a onClick={this.props.registerViewShow}>register now!</a>
                  </FormItem>
                </TabPane>
                <TabPane tab={<span><Icon type="android" />手机号码登录</span>} key="2">


                  <FormItem>
                    {getFieldDecorator('username', {
                      rules: [
                        {
                          required: true,
                          message: '请输入手机号',
                        },
                      ],
                    })(
                      <InputGroup compact>

                        <Input placeholder="手机号" addonBefore={selectBefore} prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />} className={style.antInput} />
                        <Button type="primary" className={style.antBtn} onClick={this.handleSubmit}>获取验证码</Button>
                      </InputGroup>
                      ,
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('password', {
                      rules: [
                        {
                          required: true,
                          message: '请输入密码',
                        },
                      ],
                    })(
                      <Input autoComplete="off" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} className={style.antInput} type="password" placeholder="密码" />,
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('remember', {
                      valuePropName: 'checked',
                      initialValue: false,
                    })(
                      <Checkbox>Remember me</Checkbox>,
                    )}
                    <a className="login-form-forgot" onClick={this.props.updatePasswordViewShow}>Forgot password</a>
                    <Button type="primary" className={style.antBtn} onClick={this.handleSubmit}>登录</Button>
                    Or <a onClick={this.props.registerViewShow}>register now!</a>
                  </FormItem>
                </TabPane>
              </Tabs>

            </Form>
          </Spin>
        </div>
      </div>);
  }
}

/**
 * 与@see App.js，文件中,定义的函数对应，通过this.props.* 调用
 * @type {{handleLogin: *, updatePasswordViewShow: *, registerViewShow: *}}
 */
Login.propTypes = {
  handleLogin: PropTypes.func,
  updatePasswordViewShow: PropTypes.func,
  registerViewShow: PropTypes.func,
  errorTip: PropTypes.func,
};

// export default Login;
export default Form.create()(Login);
