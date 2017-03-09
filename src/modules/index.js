import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import colorReducer from '../reducers/colorReducer.js';

export default combineReducers({ routing, colorReducer });
