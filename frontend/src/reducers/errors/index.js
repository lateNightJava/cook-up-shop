import { ADD_ERROR, REMOVE_ERROR } from '../../actions/errorActions';

const defaultState = {
  auth: null,
};

const errorsrReducer = (prevState = defaultState, action) => {
  switch(action.type) {
    case ADD_ERROR:
      return { ...prevState, [action.errorType]: action.payload };
    case REMOVE_ERROR:
      return { ...prevState, [action.errorType]: null };
    default: 
      return prevState;
  }
};

export default errorsrReducer;