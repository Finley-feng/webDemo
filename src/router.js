import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/Home/index';
//HOME2
//import IndexPage from './routes/About Us/index';
//产品展示
//import IndexPage from './routes/productShow/index';
//产品明细
//import IndexPage from './routes/productDetails/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
