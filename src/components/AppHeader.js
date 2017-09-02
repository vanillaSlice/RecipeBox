import React from 'react';
import PropTypes from 'prop-types';

import IconButton from './IconButton';

import '../styles/AppHeader.css';

const AppHeader = (props) => {
  return (
    <header className="AppHeader">
      <div className="content">
        <h1><a href=".">Recipe Box</a></h1>
        <IconButton 
          buttonStyle="light" 
          onClick={props.onClick}
          icon="plus"
          description="Add new recipe"
        />
      </div>
    </header>
  );
};

AppHeader.propTypes = {
  onClick: PropTypes.func
};

export default AppHeader;
