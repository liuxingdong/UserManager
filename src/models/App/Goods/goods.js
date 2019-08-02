export default {
  namespace: 'goods',
  state: {
    showSwitch: false,
  },
  reducers: {
    setShowSwitch(state, { payload: showSwitch }) {
      state.showSwitch = showSwitch;
      return { ...state };
    },
  }, 
  effects: {
  },

  subscriptions: {
  },
};