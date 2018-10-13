export default {
  namespace: 'orders',
  state: {
    showSwitch: false,
    bindTableData: null,
    openModel: false,
    loadingModel: false,
    ordersInfoTitle: '',
  },
  reducers: {
    setShowSwitch(state, { payload: showSwitch }) {
      state.showSwitch = showSwitch;
      return { ...state };
    },
    setOrdersData(state, { payload: bindTableData }) {
      state.bindTableData = bindTableData;
      return { ...state };   
    },
    setOpenModel(state, { payload: openModel }) {
      state.openModel = openModel;
      return { ...state };
    },
    setLoadingModel(state, { payload: loadingModel }) {
      state.loadingModel = loadingModel;
      return { ...state };
    },
    setOrdersInfoTitle(state, { payload: ordersInfoTitle }) {
      state.ordersInfoTitle = ordersInfoTitle;
      return { ...state };
    },
  },
  effects: {
  }, 
  subscriptions: {
  },
};