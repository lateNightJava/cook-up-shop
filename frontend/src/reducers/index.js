import { combineReducers } from 'redux';

import uiReducer from './ui';
import authReducer from './auth';
import errorsReducer from './errors';

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  errors: errorsReducer,
});

export default rootReducer;