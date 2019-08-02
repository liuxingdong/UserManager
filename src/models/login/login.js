

export default {
  namespace: 'login',
  state: {
    configJSON: {

    },
    currentzoom: '',
    loginSwitch: true,
    updatePasswordSwitch: false,
    registerSwitch: false,
  },
  reducers: {
    setLoginSwtch(state, { payload: loginSwitch }) {
      state.loginSwitch = loginSwitch;
      return { ...state };
    },
    setUpdatePasswordSwitch(state, { payload: updatePasswordSwitch }) {
      state.updatePasswordSwitch = updatePasswordSwitch;
      return { ...state };
    },
    setRegisterSwitch(state, { payload: registerSwitch }) {
      state.registerSwitch = registerSwitch;
      return { ...state };
    },
  },

  effects: {

  },

  subscriptions: {

  },
};
