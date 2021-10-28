import { combineReducers } from 'redux';
import userReducer from './userReducer';

const authReducer = combineReducers({
  user: userReducer,
});

export default authReducer;