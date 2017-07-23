import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { IndexPage, ExplorePage, ModifyPage, ExportPage } from 'pages';
import { App, SignupForm, LoginForm, Favourites, requireAuth, authed } from 'components';

const AppRouter = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={IndexPage} />
      <Route path="/explore" component={ExplorePage} />
      <Route path="/modify" component={ModifyPage} />
      <Route path="/export" component={ExportPage} />
      <Route path="/signup" component={authed(SignupForm)} />
      <Route path="/login" component={authed(LoginForm)} />
      <Route path="/favourites" component={requireAuth(Favourites)} />
    </Route>
  </Router>
);

AppRouter.propTypes = { history: PropTypes.object.isRequired };

export default AppRouter;
