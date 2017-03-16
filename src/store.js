import { createStore, compose } from 'redux';
import rootReducer from 'modules';

// Prevent redux devTools initialization in production
const store = createStore(rootReducer, compose(
  window.devToolsExtension && process.env.NODE_ENV === 'development'
    ? window.devToolsExtension()
    : f => f
));

export default store;
