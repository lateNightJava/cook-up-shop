export const ADD_ERROR = 'ADD_ERROR';
export const REMOVE_ERROR = 'REMOVE_ERROR';

export const addError = (payload, errorType) => {
  return { type: ADD_ERROR, payload, errorType };
};

export const removeError = (payload, errorType) => {
  return { type: REMOVE_ERROR, payload, errorType };
};