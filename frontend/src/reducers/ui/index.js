import { combineReducers } from 'redux';
import modalsReducer from './modalsReducer';

const uiReducer = combineReducers({
  modals: modalsReducer,
});

export default uiReducer;