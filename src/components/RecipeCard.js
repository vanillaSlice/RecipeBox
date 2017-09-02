import React from 'react';
import PropTypes from 'prop-types';

import '../styles/RecipeCard.css';

const RecipeCard = (props) => {
  return (
    <div className="RecipeCard" onClick={props.onClick}>
      <div className="content">
        <div 
          className="image"
          style={{backgroundImage: "url('" + props.image + "')"}} 
        />
        <h2>{props.name}</h2>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  onClick: PropTypes.func,
  image: PropTypes.string,
  name: PropTypes.string
};

export default RecipeCard;
