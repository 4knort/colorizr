import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { createNetworkInterface } from 'apollo-client';

import 'styles';

import store from './store';
import AppRouter from './router';

const rootElement = document.getElementById('app');

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin',
  },
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id,
});

render(
  <ApolloProvider store={store} client={client}>
    <AppRouter history={hashHistory} />
  </ApolloProvider>,
  rootElement
);
