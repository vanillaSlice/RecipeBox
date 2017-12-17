import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const TextArea = props => (
  <textarea
    className="textarea"
    id={props.id}
    value={props.value}
    onChange={props.onChange}
    required={props.required}
    autoComplete="false"
  />
);

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

TextArea.defaultProps = {
  value: null,
  onChange: null,
  required: false,
};

export default TextArea;
