import { SIGN_IN_USER, SIGN_OUT_USER } from '../../actions/authActions';

const defaultState = {
  id: null,
};

const userReducer = (prevState = defaultState, action) => {
  switch(action.type) {
    case SIGN_IN_USER:
      return { ...prevState, ...action.payload };
    case SIGN_OUT_USER:
      return defaultState;
    default: 
      return prevState;
  }
};

export default userReducer;