import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton/IconButton';

import './Modal.css';

const Modal = (props) => {
  return (
    <div className="Modal" onClick={props.onClose}>
      <div className="content" onClick={e => e.stopPropagation()}>
        <div className="header">
          <h2>{props.title}</h2>
          <IconButton 
            onClick={props.onClose}
            icon="close"
            description="Close modal"
          />
        </div>
        {props.children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  title: PropTypes.string
};

export default Modal;
