import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'modules';

const middlewares = [
  thunkMiddleware,
];

// Prevent redux devTools initialization in production
const store = createStore(rootReducer, compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension && process.env.NODE_ENV === 'development'
    ? window.devToolsExtension()
    : f => f
));


export default store;
