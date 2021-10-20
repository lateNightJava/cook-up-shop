import React from 'react';
import { connect } from 'react-redux';

import AuthForm from './AuthForm';
import { closeModal, openModal } from '../../actions/modalActions';

import './Modal.scss';

const Modal = props => {
  if (!props.modals.modalOpen) return null;

  let shownModal = null; 
  if (props.modals.signIn || props.modals.signUp) shownModal = <AuthForm />;
  else return null;


  return (
    <div className="modal modal-show">
      <button onClick={props.closeModal}>Close Modal</button>
      {shownModal}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    modals: state.ui.modals,
  };
};

const mapDispatchToProps = {
  closeModal,
  openModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);