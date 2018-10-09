import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout.js';
import User from '../components/App/User/User';
import Home from '../components/App/Home/Home';
import Menu from '../components/App/Menu/Menu';


function MainPage({
  dispatch, location, mainLayout, user, home, menu,
}) {
  return (
    <MainLayout dispatch={dispatch} location={location} model={mainLayout}>
      <Home globalProp={mainLayout} dispatch={dispatch} model={home} />
      <User globalProp={mainLayout} dispatch={dispatch} model={user} />
      <Menu globalProp={mainLayout} dispatch={dispatch} model={menu} />
    </MainLayout>
  );
}


function mapStateToProps(state) {
  return {
    mainLayout: state.mainLayout,
    user: state.user,


  };
}
MainPage.propTypes = {
};
export default connect(mapStateToProps)(MainPage);

// export default connect()(IndexPage);
