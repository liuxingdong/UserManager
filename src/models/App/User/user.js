// import Mock from 'mockjs';


export default {
  namespace: 'user',
  state: {
    showSwitch: false,
    userTitle: '',
    userModalVisible: false,
    selectedRowKeys: [],
    bindSelectData: null,


  },
  reducers: {
    setShowSwitch(state, { payload: showSwitch }) {
      state.showSwitch = showSwitch;
      return { ...state };
    },
    setUserModalVisible(state, { payload: userModalVisible }) {
      state.userModalVisible = userModalVisible;
      return { ...state };
    },
    setUserTitle(state, { payload: userTitle }) {
      state.userTitle = userTitle;
      return { ...state };
    },
    setSelectedRowKeys(state, { payload: selectedRowKeys }) {
      state.selectedRowKeys = selectedRowKeys;
      return { ...state };
    },
    setUserData(state, { payload: bindSelectData }) {
      state.bindSelectData = bindSelectData;
      return { ...state };
    },
  },

  effects: {

  },

  subscriptions: {

  },
};
