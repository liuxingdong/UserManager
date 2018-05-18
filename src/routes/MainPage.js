import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout.js';
import User from '../components/App/User/User';
import Home from '../components/App/Home/Home';


function MainPage({ dispatch, location, mainLayout, user,home }) {
  return (
    <MainLayout dispatch={dispatch}location={location} model={mainLayout}>
      <Home globalProp={mainLayout} dispatch={dispatch} model={home}/>
      <User globalProp={mainLayout} dispatch={dispatch} model={user}/>
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
