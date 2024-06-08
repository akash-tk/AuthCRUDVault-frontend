import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';
import fileReducer from './fileReducer';

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  file: fileReducer,
});

export default rootReducer;