import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading';
import { browserHistory } from 'dva/router';
import { message } from 'antd';


// 1. Initialize
const ERROR_MSG_DURATION = 3; // 3 秒

// 1. Initialize
// history: useRouterHistory(createHashHistory)({ queryKey: false }),
const app = dva({
  history: browserHistory,
  onError(error) {
    message.error(error, ERROR_MSG_DURATION);
  },
});
// 2. Plugins
// app.use({});
app.use(createLoading('loading'));
// 3. Model
// app.model(require('./models/example'));
app.model(require('./models/app'));
app.model(require('./models/MainLayout/mainLayout'));
// app.model(require('./models/App/Home/home'));
app.model(require('./models/App/Home/home'));
app.model(require('./models/App/User/user'));
app.model(require('./models/login/login'));
// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
