import React from 'react';

import FontAwesome from 'react-fontawesome';

import '../styles/RecipeModal.css';

const RecipeModal = (props) => {
  return (
    <div className="RecipeModal" onClick={props.onCloseRecipeModalClick}>
      <div className="container" onClick={(e) => {e.stopPropagation()}}>
        <button type="button" onClick={props.onCloseRecipeModalClick}>
          <FontAwesome name="times" size="2x" tag="i" />
          <span className="sr-only">Close new recipe modal</span>
        </button>
        <form onSubmit={(e) => {e.preventDefault(); e.target.reset()}}>
          <label>
            Recipe name * <input type="text" required autoFocus />
          </label>
          <label>
            Ingredients * <textarea required />
          </label>
          <label>
            Instructions * <textarea required />
          </label>
          <label>
            Image URL (optional) <input type="text" />
          </label>
          <button className="submit" type="submit">Add Recipe</button>
        </form>
      </div>
    </div>
  );
};

export default RecipeModal;
