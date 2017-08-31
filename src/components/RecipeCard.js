import React from 'react';

import FontAwesome from 'react-fontawesome';

import '../styles/RecipeCard.css';

const RecipeCard = (props) => {
  return (
    <div className="RecipeCard" onClick={props.onClick}>
      <h3>Recipe</h3>
    </div>
  );
};

export default RecipeCard;
