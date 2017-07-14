import { combineReducers } from 'redux';

import colorReducer from '../reducers/colorReducer';
import userReducer from '../reducers/userReducer';

export default combineReducers({ colorReducer, userReducer });
