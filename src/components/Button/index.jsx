import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Button = props => (
  <button
    type={props.type}
    className={`btn btn--${props.buttonStyle}`}
    onClick={props.onClick}
  >
    {props.text}
  </button>
);

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  buttonStyle: PropTypes.oneOf(['default', 'danger']),
  onClick: PropTypes.func,
  text: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  buttonStyle: 'default',
  onClick: null,
  text: '',
};

export default Button;
