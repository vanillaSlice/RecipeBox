import React from 'react';
import PropTypes from 'prop-types';

import './Label.css';

const Label = (props) => {
  return (
    <label className="Label">
      {props.text}
      {props.children}
    </label>
  );
};

Label.propTypes = {
  text: PropTypes.string
};

export default Label;
