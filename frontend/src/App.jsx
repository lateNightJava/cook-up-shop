import React from 'react';
import { connect } from 'react-redux';

import Modal from './Components/Modal/Modal';
import TopNavBar from './Components/TopNavBar/TopNavBar';
import AppRouter from './AppRouter';
import Footer from './Components/Footer/Footer';

import './App.scss';

const App = props => {
  return (
    <>
      <Modal />
      <div className={`app ${props.modalOpen ? 'app-blur' : ''}`}>
        <TopNavBar />
        <AppRouter />
        <Footer />
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    modalOpen: state.ui.modals.modalOpen,
  };
};

export default connect(mapStateToProps)(App);