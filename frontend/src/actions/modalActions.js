export const CLOSE_MODAL = 'ClOSE_MODAL';
export const OPEN_MODAL = 'OPEN_MODAL';

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export const openModal = payload => {
  return {
    type: OPEN_MODAL,
    payload,
  };
};