/* eslint-disable jsx-a11y/no-autofocus */

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
    autoFocus={props.autoFocus}
    autoComplete="false"
  />
);

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'URL']),
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  value: null,
  onChange: null,
  required: false,
  autoFocus: false,
};

export default Input;
