import { combineReducers } from 'redux';
import AUTH from './authReducer';
import MAIN_REDUCER from "./mainReducer"


export default combineReducers({
  auth: AUTH,
  global_access:MAIN_REDUCER
});
