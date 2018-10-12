import React from 'react';
import {
  Form, Spin, Checkbox, Col, Icon, Input, Select, Tabs, Button,
} from 'antd';
import DocumentTitle from 'react-document-title';
// import PropTypes from 'prop-types';
import * as d3 from 'd3';
import logoImg from '../../assets/yay.jpg';
import style from './Login.css';

const FormItem = Form.Item;
const { TabPane } = Tabs;
// const [TabPane] = Tabs;
const InputGroup = Input.Group;
const { Option } = Select;


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
    this.submitLogin = this.submitLogin.bind(this);
    this.showErrorTip = this.showErrorTip.bind(this);
  }

  componentDidMount() {
    // this.init();
    // this.animate();
  }

  onKeyPressLogin(event) {
    /**
     *  If you click the keyboard return key,
     *  execute the landing
     */
    if (event.which === 13) {
      // this.handleSubmit();
      d3.select('#tts').attr('tt', 'rr');
    }
  }

  showErrorTip() {


  }

  submitLogin(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      this.props.handleLogin(err, values);
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const selectBefore = (
      <Select defaultValue="86">
        <Option value="86">+86</Option>
        <Option value="81">+81</Option>
      </Select>
    );
    return (
      <div className={style.loginPage}>
        <DocumentTitle title="管理台" />
        <div className={style.loginBox}>
          <img src={logoImg} alt="logo" className={style.logo} />
          <Spin spinning={this.state.loading} size="large">
            <Form className={style.loginForm} onSubmit={this.submitLogin}>
              <Tabs defaultActiveKey="2">
                <TabPane tab={<span>账号密码登录</span>} key="1">
                  <FormItem>
                    {getFieldDecorator('username', {
                      rules: [
                        {
                          required: true,
                          message: '请输入账户名',
                        },
                      ],
                    })(<Input placeholder="账户" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} className={style.antInput} />)}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('password', {
                      rules: [
                        {
                          required: true,
                          message: '请输入密码',
                        },
                      ],
                    })(<Input autoComplete="off" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} className={style.antInput} type="password" placeholder="密码" />)}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('remember1', {
                      valuePropName: 'checked',
                      initialValue: false,
                    })(<Checkbox>记住我</Checkbox>)}
                    <a href="#tts" className="login-form-forgot" onClick={this.props.updatePasswordViewShow}>忘记密码</a>
                    <Button type="primary" htmlType="submit" className={style.antBtn}>登录</Button>
                    Or
                    {' '}
                    <a href="#tts" onClick={this.props.registerViewShow}>立即注册!</a>
                  </FormItem>
                </TabPane>
                <TabPane tab={<span>手机号码登录</span>} key="2">
                  <FormItem>
                    {getFieldDecorator('mobile', {
                      rules: [
                        {
                          required: true,
                          message: '请输入手机号',
                        },
                      ],
                    })(<Input placeholder="手机号" addonBefore={selectBefore} prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />} className={style.antInput} />)}
                  </FormItem>
                  <FormItem>
                    <InputGroup size="small">
                      {getFieldDecorator('verificationCode', {
                        rules: [
                          {
                            required: true,
                            message: '请输入验证码',
                          },
                        ],
                      })(/* eslint-disable */<Col span={12} style={{ height: '100%' }}>
                        <Input placeholder="验证码" className={style.antInput} prefix={<Icon type="question" style={{ color: 'rgba(0,0,0,.25)' }} />} />
                      </Col>/* eslint-enable */)}
                      <Col span={11} style={{ float: 'right' }}>
                        <Button type="primary" size="small" style={{ float: 'right' }} className={style.antBtn}>获取验证码</Button>
                      </Col>
                    </InputGroup>
,
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('remember2', {
                      valuePropName: 'checked',
                      initialValue: false,
                    })(<Checkbox>记住我</Checkbox>)}
                    <a href="#tts" className="login-form-forgot" onClick={this.props.updatePasswordViewShow}>忘记密码</a>
                    <Button type="primary" htmlType="submit" className={style.antBtn}>登录</Button>
                    Or
                    {' '}
                    <a href="#tts" onClick={this.props.registerViewShow}>立即注册!</a>
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
// Login.propTypes = {
// updatePasswordViewShow : PropTypes.func,
// updatePasswordViewShow: PropTypes.func,
// registerViewShow: PropTypes.func,
// errorTip: PropTypes.func,
// };

// export default Login;
export default Form.create()(Login);
