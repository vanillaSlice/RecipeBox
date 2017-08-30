import React from 'react';

import FontAwesome from 'react-fontawesome';

import '../styles/NewRecipeForm.css';

const NewRecipeForm = (props) => {
  return (
    <div className="NewRecipeForm">
      <div className="container">
        <h2>Add New Recipe</h2>
        <button type="button" onClick={props.onCloseRecipeFormClick}>
          <FontAwesome name="times" size="2x" tag="i" />
          <span className="sr-only">Close new recipe form</span>
        </button>
        <form>
          <label>
            Recipe name * <input type="text" required />
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

export default NewRecipeForm;
