import React, { PropTypes } from 'react';
import { Route, IndexRoute } from 'react-router';
import { HotRouter } from 'utils';

import { IndexPage, ExplorePage, ModifyPage, ExportPage } from 'pages';
import { App } from 'components';

const AppRouter = ({ history }) => (
  <HotRouter history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={IndexPage} />
      <Route path="/explore" component={ExplorePage} />
      <Route path="/modify" component={ModifyPage} />
      <Route path="/export" component={ExportPage} />
    </Route>
  </HotRouter>
);

AppRouter.propTypes = { history: PropTypes.object.isRequired };
export default AppRouter;
