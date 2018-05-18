/**
 * This model is used to control page
 * layout parameters
 * @see MainLayout.js
 */
export default {
  namespace: 'mainLayout',
  state: {
    collapsed: false,
    theme: 'light',
    menuShowSwitch: false,
    userSwitch  : false,
    menuSwitch  : false,
    homeSwitch  : true,
    roleSwitch  : false,

  },
  reducers: {
    setCollapsed(state, { payload: collapsed }) {
      state.collapsed = collapsed;
      return { ...state };
    },
    setTheme(state, { payload: theme }) {
      state.theme = theme;
      return { ...state };
    },
    setMenuConfig(state, { payload: menu }) {
      state.menuConfig = menu;


      switch (menu){
        case 'user':
          state.userSwitch = true;
          state.menuSwitch = false;
          state.homeSwitch = false;
          state.roleSwitch = false;
          break;
        case 'menu':
          state.userSwitch = false;
          state.menuSwitch = true;
          state.homeSwitch = false;
          state.roleSwitch = false;
          break;
        case 'role':
          state.userSwitch = false;
          state.menuSwitch = false;
          state.homeSwitch = false;
          state.roleSwitch = true;
          break;
        case 'home':
          state.userSwitch = false;
          state.menuSwitch = false;
          state.homeSwitch = true;
          state.roleSwitch = false;
          break;
        default:
          state.userSwitch = false;
          state.menuSwitch = false;
          state.homeSwitch = false;
          state.roleSwitch = false;
          break;

      }

      return { ...state };
    },
    setUserSwitch(state) {
      state.userSwitch = true;
      state.menuSwitch = false;
      state.homeSwitch = false;
      state.roleSwitch = false;
      return { ...state };
    },
    setMenuSwitch(state) {
      state.userSwitch = false;
      state.menuSwitch = true;
      state.homeSwitch = false;
      state.roleSwitch = false;
      return { ...state };
    },
    setHomeSwitch(state) {
      state.userSwitch = false;
      state.menuSwitch = false;
      state.homeSwitch = true;
      state.roleSwitch = false;
      return { ...state };
    },
    setRoleSwitch(state) {
      state.userSwitch = false;
      state.menuSwitch = false;
      state.homeSwitch = false;
      state.roleSwitch = true;
      return { ...state };
    },
  },

  effects: {

  },

  subscriptions: {

  },
};
