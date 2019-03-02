import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Button = (props) => {
  const {
    type,
    buttonStyle,
    onClick,
    text,
  } = props;

  if (type === 'submit') {
    return (
      <button
        type="submit"
        className={`btn btn--${buttonStyle}`}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }

  return (
    <button
      type="button"
      className={`btn btn--${buttonStyle}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

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
