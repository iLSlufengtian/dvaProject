import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import HomePage from './routes/IndexPage';
// import HomePage from './routes/demo';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        {/* <Route path="/demo" exact component={HomePage} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
