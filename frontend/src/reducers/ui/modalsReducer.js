import { CLOSE_MODAL, OPEN_MODAL } from '../../actions/modalActions';

const defaultState = {
  modalOpen: false,
  signIn: false,
  signUp: false,
};

const modalsReducer = (prevState = defaultState, action) => {
  switch(action.type) {
    case CLOSE_MODAL: 
      return defaultState;
    case OPEN_MODAL:
      return { ...defaultState, ...action.payload, modalOpen: true };
    default:
      return prevState;
  }
};

export default modalsReducer;