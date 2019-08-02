import { routerRedux } from 'dva/router';
import * as userService from '../services/user.js';
// import { browserHistory } from 'dva/router';

export default {
  namespace: 'app',
  state: {
    loginState: false,
    isLogin: false,
    logining: false,
    username: '',
    password: '',
    user: {
      uid: '',
      name: '',
      nickname: '',
      userType: 200,
      mail: '',
      phone: '',
      sessionid: '',
    },
    errorTip: '',
  },
  reducers: {
    loginStart(state) {
      state.logining = true;
      return { ...state };
    },
    setLoginState(state, { payload: loginState }) {
      state.loginState = loginState;
      return { ...state };
    },
    loginSuccess(state, { payload: result }) {
      state.isLogin = true;
      /**
       * 输出
       */
      console.log(result);
      /*  state.user.uid = result.user.Id;
      state.user.name = result.user.Name;
      state.user.nickname = result.user.Nickname;
      state.user.userType = result.user.UserType;
      state.user.mail = result.user.Mail;
      state.user.phone = result.user.Phone;
      state.user.sessionid = result.session; */
      return { ...state };
    },
    loginFiled(state) {
      this.state.isLogin = false;
      this.state.errorTip = '登陆失败,用户名或密码错误';
      this.state.logining = false;
      return { ...state };
    },
    initRememberContent(state, { username, password }) {
      this.state.username = username;
      this.state.password = password;
      return { ...state };
    },

  },
  effects: {
    *login({ payload }, { call, put }) {
      console.log('================>>测试点1');
      yield put({
        type: 'loginSuccess',
        payload: 'tts',
      });
      yield put({
        type: 'setLoginState',
        payload: true,
      });
      if (payload.remember) {
        localStorage.setItem('username', payload.username);
        localStorage.setItem('password', payload.password);
      }
      yield put(routerRedux.push('/main'));
      // console.log('=================显示测试=======================');
      // yield call(userService.doLoginPage);
      // const ret = yield call(userService.login,
      //   { username: payload.username, password: payload.password, remember: 1 });
      // console.log(ret);
      // if (ret && ret.data && ret.data.result) {
      //   // alert(JSON.stringify(ret.data.data));
      //   // localStorage.setItem('userId', ret.data.data.user.Id);
      //   // yield put({
      //   //   type: 'loginSuccess',
      //   //   payload: ret.data.data,
      //   // });
      //   // yield put(routerRedux.push('/IndexPage'));

      //   // if (payload.remember) {
      //   //   localStorage.setItem('name', payload.name);
      //   //   localStorage.setItem('passwd', payload.passwd);
      //   // }
      //   console.log(ret);
      // } else {
      //   yield put({
      //     type: 'loginFiled',
      //   });
      // }
    },
    *loginAuth({ payload: pathname }, { call, put }) {
      // const appModel = yield select(state => state.app);
      console.log('======进入权限管理中');
      console.log(pathname);
      // , { put, select }
      /* if (!appModel || !appModel.isLogin) {
        yield put((routerRedux.push('/')));
      }
      if (!state.app.isLogin) {
        yield put(routerRedux.push('/'));
      } */

      /* if (appModel && appModel.loginState) {
        yield put((routerRedux.push(payload)));
      }else {

      } */

      console.log('================测试点3');
      console.log(pathname);
      yield put((routerRedux.push(pathname)));
    },
    /**
     * Exit system
     * @param state
     * @param put
     * @param select
     * @returns {{}}
     */
    *logoutOut(state, { put, select }) {
      state.isLogin = false;
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      yield put(routerRedux.push('/'));
      return { ...state };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      // return history.listen(({ pathname, query }) => {
      return history.listen(({ pathname, query }) => {
        console.log('====================>>测试点2');
        console.log(pathname);
        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');
        if (username && password) {
          console.log(username, password);
          /**
           * 实例化当前参数
           */
          /* if (pathname === '/') {
            dispatch({
              type: 'loginAuth',
              payload: '/main',
            });
          } else {
            dispatch({
              type: 'loginAuth',
              payload: '/',
            });
          } */
        }/* else if (pathname === '/main') {
          dispatch({
            type: 'loginAuth',
            payload: 'tts',
          });
        } */
      });
    },
  },
};
