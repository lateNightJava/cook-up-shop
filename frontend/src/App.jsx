import React from 'react';

import AuthModal from './Components/AuthModal/AuthModal';
import TopNavBar from './Components/TopNavBar/TopNavBar';
import AppRouter from './AppRouter';
import Footer from './Components/Footer/Footer';

import './App.scss';

const App = () => {

  const modalOpen = true;

  return (
    <>
      <AuthModal />
      <div className={`app ${modalOpen ? 'blur' : ''}`}>
        <TopNavBar />
        <AppRouter />
        <Footer />
      </div>
    </>
  );
};

export default App;