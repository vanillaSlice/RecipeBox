import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import './IconButton.css';

const IconButton = (props) => {
  return (
    <button 
      className={"IconButton " + props.buttonStyle} 
      onClick={props.onClick}
    >
      <FontAwesome name={props.icon} size="2x" tag="i" />
      <span className="sr-only">{props.description}</span>
    </button>
  );
};

IconButton.propTypes = {
  buttonStyle: PropTypes.oneOf(['dark', 'light']),
  onClick: PropTypes.func,
  icon: PropTypes.string,
  description: PropTypes.string
};

IconButton.defaultProps = {
  buttonStyle: 'dark',
  icon: ''
};

export default IconButton;
