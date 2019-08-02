import React from 'react';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout.js';
import User from '../components/App/User/User';
import Home from '../components/App/Home/Home';
import Menu from '../components/App/Menu/Menu';
import Banner from '../components/App/Banner/Banner';
import Goods from '../components/App/Goods/Goods';
import Orders from '../components/App/Orders/Orders';

function MainPage({
  dispatch, location, mainLayout, user, home, menu, banner, goods, orders,
}) {
  return (
    <MainLayout dispatch={dispatch} location={location} model={mainLayout}>
      <Home globalProp={mainLayout} dispatch={dispatch} model={home} />
      <User globalProp={mainLayout} dispatch={dispatch} model={user} />
      <Menu globalProp={mainLayout} dispatch={dispatch} model={menu} />
      <Banner globalProp={mainLayout} dispatch={dispatch} model={banner} />
      <Goods globalProp={mainLayout} dispatch={dispatch} model={goods} />
      <Orders globalProp={mainLayout} dispatch={dispatch} model={orders} />
    </MainLayout>
  );
}


function mapStateToProps(state) {
  return {
    mainLayout: state.mainLayout,
    home: state.home,
    user: state.user,
    menu: state.menu,
    banner: state.banner,
    goods: state.goods,
    orders: state.orders,
  };
}
MainPage.propTypes = {
};
export default connect(mapStateToProps)(MainPage);

// export default connect()(IndexPage);
