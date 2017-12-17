import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import './index.css';

const IconButton = props => (
  <button
    className={`icon-btn icon-btn--${props.buttonStyle}`}
    onClick={props.onClick}
  >
    <FontAwesome name={props.icon} size="2x" tag="i" />
    <span className="sr-only">{props.description}</span>
  </button>
);

IconButton.propTypes = {
  buttonStyle: PropTypes.oneOf(['dark', 'light']),
  onClick: PropTypes.func,
  icon: PropTypes.string,
  description: PropTypes.string,
};

IconButton.defaultProps = {
  buttonStyle: 'dark',
  onClick: null,
  icon: '',
  description: '',
};

export default IconButton;
