import * as AuthApi from '../api/authApi';

export const ADD_USER = 'ADD_USER';
export const AUTH_ERROR = 'AUTH_ERROR';

export const addUser = payload => {
  return { type: CREATE_USER, payload };
};

export const authError = payload => {
  return { type: AUTH_ERROR, payload };
};

export const signUp = data => {
  return async dispatch => {
    try {
      debugger 
      const user = await AuthApi.signUp(data);
      debugger
      const x = 2;
      return dispatch(addUser(user));
    } catch (error) {
      debugger
      const x = 2;
      console.log(error.response.data);
      return dispatch(authError(error));
    }
  };
};