/* eslint-disable
    jsx-a11y/click-events-have-key-events,
    jsx-a11y/no-static-element-interactions
*/

import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const RecipeCard = props => (
  <div className="recipe-card" onClick={props.onClick}>
    <div className="recipe-card__content">
      <div
        className="recipe-card__img"
        style={{ backgroundImage: `url('${props.image}')` }}
      />
      <h2 className="recipe-card__title">{props.name}</h2>
    </div>
  </div>
);

RecipeCard.propTypes = {
  onClick: PropTypes.func,
  image: PropTypes.string,
  name: PropTypes.string,
};

RecipeCard.defaultProps = {
  onClick: null,
  image: '',
  name: '',
};

export default RecipeCard;
