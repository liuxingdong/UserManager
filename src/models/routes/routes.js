export default {
  namespace: 'routes',
  state: {
    display: true,

  },
  reducers: {

    displayControl(state) {
      state.display = !state.display;
      return { ...state };
    },
  },

  effects: {

  },

  subscriptions: {

  },
};
