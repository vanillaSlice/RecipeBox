import React, { Component } from 'react';

import AppHeader from './AppHeader';
import RecipeCard from './RecipeCard';
import NewRecipeForm from './NewRecipeForm';

import '../styles/App.css';

class App extends Component {
  state = {
    renderNewRecipeForm: false,
    recipes: [{},{},{},{},{},{},{},{},{}]
  }

  handleAddClick = () => {
    this.setState(prevState => ({
      renderNewRecipeForm: !prevState.renderNewRecipeForm
    }))
  };

  render() {
    return (
      <div className="App">
        <AppHeader onAddRecipeClick={this.handleAddClick} />
        <main>
          {this.state.recipes.map(recipe => (<RecipeCard />))}
        </main>
        {this.state.renderNewRecipeForm &&
          <NewRecipeForm onCloseRecipeFormClick={this.handleAddClick} />
        }
      </div>
    );
  }
}

export default App;
