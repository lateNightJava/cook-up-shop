 const defaultState = {
  signIn: false,
  signUp: false,
};


const modalsReducer = (prevState = defaultState, action) => {
  Object.freeze(prevState);
  const newState = { ...prevState };

  switch(action.type) {
    default:
      return newState;
  }
};

export default modalsReducer;