import React from 'react';
import { Router, Route } from 'dva/router';
import MainPage from './routes/MainPage.js';
import App from './routes/App.js';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <div style={{ width: '100%', height: '100%' }}>
        <Route path="/" component={App} />
        <Route path="/main" component={MainPage} />
      </div>
    </Router>
  );
}

export default RouterConfig;
