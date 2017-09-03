import React from 'react';
import PropTypes from 'prop-types';

import './TextArea.css';

const TextArea = (props) => {
  return (
    <textarea
      className="TextArea"
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      required={props.required}
      autoComplete="false" 
    />
  );
};

TextArea.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool
};

TextArea.defaultProps = {
  required: false
};

export default TextArea;
