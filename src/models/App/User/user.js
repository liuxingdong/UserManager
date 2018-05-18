

export default {
  namespace: 'user',
  state: {
    showSwitch: false,
    userTitle : '',
    userModalVisible : false,
    selectedRowKeys : [],

  },
  reducers: {
    setShowSwitch(state, { payload: showSwitch }) {
      state.showSwitch = showSwitch;
      return { ...state };
    },
    setUserModalVisible(state ,{ payload: userModalVisible }) {
      state.userModalVisible = userModalVisible;
      return { ...state };
    },
    setUserTitle (state,{payload : userTitle }){
      state.userTitle = userTitle;
      return { ...state};
    },
    setSelectedRowKeys(state,{payload : selectedRowKeys}){
      state.selectedRowKeys = selectedRowKeys;
      return { ...state};
    }
  },

  effects: {

  },

  subscriptions: {

  },
};
