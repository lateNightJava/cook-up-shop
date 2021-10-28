import * as AuthApi from '../api/authApi';

export const ADD_USER = 'ADD_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';

export const addUser = payload => {
  return { type: SIGN_IN_USER, payload };
};

export const authError = payload => {
  return { type: AUTH_ERROR, payload };
};

export const signUp = data => {
  return async dispatch => {
    try {
      debugger 
      const response = await AuthApi.signUp(data);
      debugger
      const x = 2;
      return dispatch(addUser(response.data));
    } catch (error) {
      debugger
      const x = 2;
      console.log(error.response.data);
      return dispatch(authError(error));
    }
  };
};