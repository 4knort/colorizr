import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import colorReducer from '../reducers/colorReducer';

export default combineReducers({ routing, colorReducer });
