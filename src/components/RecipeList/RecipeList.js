import React from 'react';
import PropTypes from 'prop-types';

import RecipeCard from '../RecipeCard/RecipeCard';

import './RecipeList.css';

const RecipeList = (props) => {
  return (
    <div className="RecipeList">
      {renderRowsOfRecipeCards(props)}
    </div>
  );
};

const renderRowsOfRecipeCards = (props) => {
  // map recipes to recipe cards
  const recipeCards = props.recipes.map((recipe, index) => {
    return (
      <RecipeCard key={"Recipe-" + (index + 1)}
        name={recipe.name}
        image={recipe.image}
        onClick={() => props.onClick(recipe)} 
      />
    );
  });

  // organise into rows of 3
  const rows = recipeCards.reduce((rows, recipeCard, index) => {
    if (index % 3 === 0) {
      rows.push([recipeCard]);
    } else {
      rows[Math.floor(index / 3)].push(recipeCard);
    }
    return rows;
  }, []);

  // wrap inside row divs
  const rowDivs = rows.map((row, index) => {
    return (
      <div className="row" key={"Row-" + (index + 1)}>
        {row}
      </div>
    );
  });

  return rowDivs;
};

RecipeList.propTypes = {
  recipes: PropTypes.array,
  onClick: PropTypes.func
};

RecipeList.defaultProps = {
  recipes: []
};

export default RecipeList;
