import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Button.css';

const Button = (props) => {
  return (
    <button 
      type={props.type} 
      className={"Button " + props.buttonStyle} 
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  buttonStyle: PropTypes.oneOf(['default', 'danger']),
  onClick: PropTypes.func,
  text: PropTypes.string
};

Button.defaultProps = {
  type: 'button',
  buttonStyle: 'default'
};

export default Button;
