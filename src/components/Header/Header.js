import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton/IconButton';

import './Header.css';

const Header = (props) => {
  return (
    <header className="Header">
      <div className="content">
        <h1><a href=".">Recipe Box</a></h1>
        <IconButton 
          buttonStyle="light" 
          onClick={props.onAdd}
          icon="plus"
          description="Add new recipe"
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  onAdd: PropTypes.func
};

export default Header;
