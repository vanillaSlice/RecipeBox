import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const Input = (props) => {
  return (
    <input 
      className="Input"
      type={props.type}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      required={props.required}
      autoFocus={props.autoFocus}
      autoComplete="false" 
    />
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'URL']),
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  autoFocus: PropTypes.bool
};

Input.defaultProps = {
  type: 'text',
  required: false,
  autoFocus: false
};

export default Input;
