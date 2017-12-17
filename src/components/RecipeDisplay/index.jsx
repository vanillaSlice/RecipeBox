import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/';

import './index.css';

const RecipeDisplay = props => (
  <div className="recipe-display">
    <div className="recipe-display__row">
      <img
        className="recipe-display__img"
        src={props.image}
        alt={props.name}
        title={props.name}
      />
      <div className="recipe-display__ingredients">
        <h3 className="recipe-display__title">Ingredients</h3>
        <p className="recipe-display__text">{props.ingredients}</p>
      </div>
    </div>
    <div className="recipe-display__method">
      <h3 className="recipe-display__title">Method</h3>
      <p className="recipe-display__text">{props.method}</p>
    </div>
    <Button onClick={props.onEdit} text="Edit" />
    <Button buttonStyle="danger" onClick={props.onDelete} text="Delete" />
  </div>
);

RecipeDisplay.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  ingredients: PropTypes.string,
  method: PropTypes.string,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

RecipeDisplay.defaultProps = {
  image: '',
  name: '',
  ingredients: '',
  method: '',
  onEdit: null,
  onDelete: null,
};

export default RecipeDisplay;
