import * as AuthApi from '../api/authApi';
import { closeModal } from './modalActions';
import { addError } from './errorActions';

export const ADD_USER = 'ADD_USER';
export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';

export const addUser = payload => {
  return { type: SIGN_IN_USER, payload };
};

export const signUp = data => {
  return async dispatch => {
    try {
      const response = await AuthApi.signUp(data);
      debugger
      dispatch(addUser(response.data));
      dispatch(closeModal());

      return response;
    } catch (error) {
      console.log(error.response.data);
      debugger
      dispatch(addError(error.response.data, 'auth'));

      return error;
    }
  };
};