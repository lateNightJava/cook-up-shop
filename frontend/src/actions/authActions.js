import AuthApi from '../api/authApi';

export const LOGIN_USER = 'LOGIN_USER';

export const addUser = payload => {
  return { type: LOGIN_USER, payload };
};

export const signUp = body => {
  return async dispatch => {
    try {
      const user = await AuthApi.signUp(body);
      dispatch(addUser(user));
    } catch (err) {
      console.log(err);
    }
  };
};