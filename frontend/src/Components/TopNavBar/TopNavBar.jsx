import React from 'react';

import SearchBar from '../SearchBar/SearchBar';

import './TopNavBar.scss';

const TopNavBar = () => {
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
        <button onClick={() => console.log('clicked sign in')}>Sign In</button>
        <button onClick={() => console.log('clicked sign up')}>Sign Up</button>
      </section>
    </nav>
  );
};

export default TopNavBar;