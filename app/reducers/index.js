import { combineReducers } from 'redux';

import chatReducer from './chat';
import userReducer from './user';

export default combineReducers({
  chatReducer,
  userReducer,
});
