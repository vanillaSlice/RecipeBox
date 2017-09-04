import React, { Component } from 'react';

import Header from '../Header/Header';
import RecipeList from '../RecipeList/RecipeList';
import Modal from '../Modal/Modal';
import RecipeForm from '../RecipeForm/RecipeForm';
import RecipeDisplay from '../RecipeDisplay/RecipeDisplay';

import data from '../../data/recipes.json';

import './App.css';

class App extends Component {
  state = {
    recipes: JSON.parse(localStorage.getItem('recipes')) || data.recipes,
    selectedRecipe: {},
    displayModal: false,
    mode: ''
  };

  handleAddRecipeClick = () => {
    this.setState({
      selectedRecipe: {},
      displayModal: true,
      mode: 'Add'
    });
  };

  handleRecipeCardClick = (recipe) => {
    this.setState({
      selectedRecipe: recipe,
      displayModal: true,
      mode: 'Display'
    });
  };

  handleEditClick = () => {
    this.setState({
      displayModal: true,
      mode: 'Edit'
    });
  };

  handleDeleteClick = () => {
    this.setState(prevState => {
      const recipes = [...prevState.recipes];
      for (let i = 0; i < recipes.length; i++) {
        if (recipes[i] === this.state.selectedRecipe) {
          recipes.splice(i, 1);
          break;
        }
      }
      localStorage.setItem('recipes', JSON.stringify(recipes));
      return {recipes: recipes, displayModal: false};
    });
  };

  handleCloseModalClick = () => {
    this.setState({
      selectedRecipe: {},
      displayModal: false,
      mode: ''
    });
  };

  renderModal = () => {
    if (this.state.mode === 'Display') {
      return (
        <Modal
          onClose={this.handleCloseModalClick}
          title={this.state.selectedRecipe.name}
        >
          <RecipeDisplay 
            {...this.state.selectedRecipe}
            onEdit={this.handleEditClick}
            onDelete={this.handleDeleteClick} 
          />
        </Modal>
      );
    } else if (this.state.mode === 'Add') {
      return (
        <Modal onClose={this.handleCloseModalClick} title="Add recipe">
          <RecipeForm onSave={this.saveRecipe} />
        </Modal>
      ); 
    } else {
      return (
        <Modal onClose={this.handleCloseModalClick} title="Edit recipe">
          <RecipeForm 
            {...this.state.selectedRecipe}
            onSave={this.updateRecipe}
          />
        </Modal>
      );
    }
  };

  saveRecipe = (recipe) => {
    this.setState(prevState => {
      const recipes = [...prevState.recipes];
      recipes.push(recipe);
      localStorage.setItem('recipes', JSON.stringify(recipes));
      return {recipes: recipes}
    });
  };

  updateRecipe = (recipe) => {
    this.setState(prevState => {
      const recipes = [...prevState.recipes];
      for (let i = 0; i < recipes.length; i++) {
        if (recipes[i] === this.state.selectedRecipe) {
          recipes[i] = recipe;
          break;
        }
      }
      localStorage.setItem('recipes', JSON.stringify(recipes));
      return {recipes: recipes, selectedRecipe: recipe, mode: 'Display'};
    });
  };

  render = () => {
    return (
      <div className="App">
        <Header onAdd={this.handleAddRecipeClick} />
        <RecipeList 
          recipes={this.state.recipes}
          onClick={this.handleRecipeCardClick}
        />
        {this.state.displayModal && this.renderModal()}
      </div>
    );
  };
}

export default App;
