import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Input = props => (
  <input
    className="input"
    type={props.type}
    id={props.id}
    value={props.value}
    onChange={props.onChange}
    required={props.required}
    autoComplete="false"
  />
);

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'url']),
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  value: null,
  onChange: null,
  required: false,
};

export default Input;
