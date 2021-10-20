import React from 'react';
import { connect } from 'react-redux';

import SearchBar from '../SearchBar/SearchBar';

import { openModal } from '../../actions/modalActions';

import './TopNavBar.scss';

const TopNavBar = props => {
  return (
    <nav className="top-nav-bar">
      <section className="top-nav-bar-left">
        LOGO HERE Cook-Up-Shop
      </section>
      <section className="top-nav-bar-middle">
        <SearchBar />
      </section>
      <section className="top-nav-bar-right">
        {/* <AcountNav /> */}
        <button onClick={() => props.openModal({ signIn: true })}>Sign In</button>
        <button onClick={() => props.openModal({ signUp: true })}>Sign Up</button>
      </section>
    </nav>
  );
};

const mapDispatchToProps = {
  openModal,
};

export default connect(null, mapDispatchToProps)(TopNavBar);