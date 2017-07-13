import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { IndexPage, ExplorePage, ModifyPage, ExportPage } from 'pages';
import { App, SignupForm, LoginForm } from 'components';

const AppRouter = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={IndexPage} />
      <Route path="/explore" component={ExplorePage} />
      <Route path="/modify" component={ModifyPage} />
      <Route path="/export" component={ExportPage} />
      <Route path="/signup" component={SignupForm} />
      <Route path="/login" component={LoginForm} />
    </Route>
  </Router>
);

AppRouter.propTypes = { history: PropTypes.object.isRequired };

export default AppRouter;
