import React from 'react';
import PropTypes from 'prop-types';

import Modal from './Modal';
import Button from './Button';

import '../styles/RecipeDisplayModal.css';

const RecipeDisplayModal = (props) => {
  const recipe = props.recipe;
  return (
    <div className="RecipeDisplayModal">
      <Modal title={recipe.name} onClick={props.onClose}>
        <div className="row">
          <img src={recipe.image} alt={recipe.name} title={recipe.name} />
          <div className="recipe-info">
            <h3>Ingredients</h3>
            <p>{recipe.ingredients}</p>
          </div>
        </div>
        <div className="recipe-info">
          <h3>Method</h3>
          <p>{recipe.method}</p>
        </div>
        <Button onClick={props.onEdit} text="Edit" />
        <Button buttonStyle="danger" onClick={props.onDelete} text="Delete" />
      </Modal>
    </div>
  );
};

RecipeDisplayModal.propTypes = {
  recipe: PropTypes.object,
  onClose: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
};

export default RecipeDisplayModal;
