import React, { Component } from 'react';

import Header from '../Header/';
import RecipeList from '../RecipeList/';
import Modal from '../Modal/';
import RecipeForm from '../RecipeForm/';
import RecipeDisplay from '../RecipeDisplay/';

import data from '../../data/recipes.json';

import './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: JSON.parse(localStorage.getItem('recipes')) || data.recipes,
      selectedRecipe: {},
      displayModal: false,
      mode: '',
    };

    this.handleAddRecipeClick = this.handleAddRecipeClick.bind(this);
    this.handleRecipeCardClick = this.handleRecipeCardClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleCloseModalClick = this.handleCloseModalClick.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
  }

  handleAddRecipeClick() {
    this.setState({
      selectedRecipe: {},
      displayModal: true,
      mode: 'Add',
    });
  }

  handleRecipeCardClick(recipe) {
    this.setState({
      selectedRecipe: recipe,
      displayModal: true,
      mode: 'Display',
    });
  }

  handleEditClick() {
    this.setState({
      displayModal: true,
      mode: 'Edit',
    });
  }

  handleDeleteClick() {
    this.setState((prevState) => {
      const recipes = [...prevState.recipes].filter(recipe => recipe !== this.state.selectedRecipe);
      localStorage.setItem('recipes', JSON.stringify(recipes));
      return { recipes, displayModal: false };
    });
  }

  handleCloseModalClick() {
    this.setState({
      selectedRecipe: {},
      displayModal: false,
      mode: '',
    });
  }

  updateRecipe(recipe) {
    this.setState((prevState) => {
      const recipes = [...prevState.recipes];
      const index = recipes.findIndex(e => e === this.state.selectedRecipe);
      recipes[index] = recipe;
      localStorage.setItem('recipes', JSON.stringify(recipes));
      return { recipes, selectedRecipe: recipe, mode: 'Display' };
    });
  }

  saveRecipe(recipe) {
    this.setState((prevState) => {
      const recipes = [...prevState.recipes];
      recipes.push(recipe);
      localStorage.setItem('recipes', JSON.stringify(recipes));
      return { recipes };
    });
  }

  renderModal() {
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
    } else if (this.state.mode === 'Edit') {
      return (
        <Modal onClose={this.handleCloseModalClick} title="Edit recipe">
          <RecipeForm
            {...this.state.selectedRecipe}
            onSave={this.updateRecipe}
          />
        </Modal>
      );
    }

    return <Modal />;
  }

  render() {
    return (
      <div className="app">
        <Header onAdd={this.handleAddRecipeClick} />
        <RecipeList
          recipes={this.state.recipes}
          onClick={this.handleRecipeCardClick}
        />
        {this.state.displayModal && this.renderModal()}
      </div>
    );
  }
}

export default App;
