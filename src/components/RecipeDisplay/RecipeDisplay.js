import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import './RecipeDisplay.css';

const RecipeDisplay = (props) => {
  return (
    <div className="RecipeDisplay">
      <div className="row">
        <img 
          src={props.image}
          alt={props.name}
          title={props.name} 
        />
        <div className="recipe-info">
          <h3>Ingredients</h3>
          <p>{props.ingredients}</p>
        </div>
      </div>
      <div className="recipe-info">
        <h3>Method</h3>
        <p>{props.method}</p>
      </div>
      <Button onClick={props.onEdit} text="Edit" />
      <Button buttonStyle="danger" onClick={props.onDelete} text="Delete" />
    </div>
  );
};

RecipeDisplay.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  ingredients: PropTypes.string,
  method: PropTypes.string,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
};

export default RecipeDisplay;
