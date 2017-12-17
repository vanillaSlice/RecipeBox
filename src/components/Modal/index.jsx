/* eslint-disable
    jsx-a11y/click-events-have-key-events,
    jsx-a11y/no-static-element-interactions
*/

import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton/';

import './index.css';

const Modal = props => (
  <div className="modal" onClick={props.onClose}>
    <div className="modal__container">
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <div className="modal__header">
          <h2 className="modal__title">{props.title}</h2>
          <IconButton
            onClick={props.onClose}
            icon="close"
            description="Close modal"
          />
        </div>
        {props.children}
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  onClose: null,
  title: '',
};

export default Modal;
