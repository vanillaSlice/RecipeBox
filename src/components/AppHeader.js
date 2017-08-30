import React from 'react';

import FontAwesome from 'react-fontawesome';

import '../styles/AppHeader.css';

const AppHeader = (props) => {
  return (
    <header className="AppHeader">
      <div className="container">
        <h1><a href=".">Recipe Box</a></h1>
        <button type="button" onClick={props.onAddRecipeClick}>
          <FontAwesome name="plus" size="2x" tag="i" />
          <span className="sr-only">Add new recipe</span>
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
