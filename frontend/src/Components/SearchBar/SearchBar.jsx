import React from 'react';

import './SearchBar.scss';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="search" placeholder="luk in 4 sumting..." className="search-bar-input" />
    </div>
  );
};

export default SearchBar;

