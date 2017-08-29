import React from 'react';

import FontAwesome from 'react-fontawesome';

import '../styles/AppHeader.css';

const AppHeader = (props) => {
  return (
    <header className="AppHeader">
      <div className="container">
        <h1>Recipe Box</h1>
        <div className="right">
          <button type="button">
            <FontAwesome
              name='search'
              size='2x'
            />
          </button>
          <button type="button">
            <FontAwesome
              name='plus'
              size='2x'
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
