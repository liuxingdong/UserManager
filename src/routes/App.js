import React from 'react';
import { connect } from 'dva';
import styles from './App.css';
import Login from '../components/Login/Login.js';

function App({
  app, loading, dispatch, login,
}) {
  const loginProps = {
    dispatch,
    loading,
    errorTip: app.onError,
    userName: app.userName,
    password: app.password,
    handleLogin,
    loginViewShow,
    updatePasswordViewShow,
    registerViewShow,
    login,
    loginInfomationShow,

  };

  function loginInfomationShow(loginSwitch, updatePasswordSwitch, registerSwitch) {
    console.log(loginSwitch);
    dispatch({
      type: 'login/setLoginSwtch',
      payload: loginSwitch,
    });
    dispatch({
      type: 'login/setUpdatePasswordSwitch',
      payload: updatePasswordSwitch,
    });
    dispatch({
      type: 'login/setRegisterSwitch',
      payload: registerSwitch,
    });
  }
  function loginViewShow() {

  }
  function updatePasswordViewShow() {
    app.errorTip('================');
  }
  function registerViewShow() {

  }

  function handleLogin(error, loginValues) {
    console.log(`==================>>打印输出为:${error}`, loginValues);
    /* dispatch({
      type: 'app/setLoginState',
      payload: loginState,
    }); */
    if (loginValues) {
      dispatch({
        type: 'app/login',
        payload: {
          username: loginValues.username,
          password: loginValues.password,
          remember: loginValues.remember,
        },
      });
    }
  }

  return (
    <div className={app.loginState ? styles.normalDisplay : styles.normal}>
      <Login {...loginProps} />
    </div>
  );
}


function mapStateToProps(state) {
  return {
    app: state.app,
    loading: state.loading.global,
    login: state.login,
  };
}

export default connect(mapStateToProps)(App);
