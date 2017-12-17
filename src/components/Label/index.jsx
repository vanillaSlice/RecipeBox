/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Label = props => (
  <label className="label">
    {props.text}
    {props.children}
  </label>
);

Label.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Label;
