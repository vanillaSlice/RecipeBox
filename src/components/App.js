import React, { Component } from 'react';

import AppHeader from './AppHeader';
import RecipeCard from './RecipeCard';
import RecipeModal from './RecipeModal';

import '../styles/App.css';

class App extends Component {
  state = {
    renderRecipeModal: false,
    recipes: [{},{},{},{},{},{},{},{},{}]
  }

  handleAddClick = () => {
    this.setState(prevState => ({
      renderRecipeModal: !prevState.renderRecipeModal
    }))
  };

  handleSubmit = (e) => {
    console.log(e);
  };

  handleRecipeCardClick = () => {
    this.setState(prevState => ({
      renderRecipeModal: !prevState.renderRecipeModal
    }))
  };

  render() {
    return (
      <div className="App">
        <AppHeader onAddRecipeClick={this.handleAddClick} />
        <main>
          {this.state.recipes.map(recipe => (<RecipeCard onClick={this.handleRecipeCardClick} />))}
        </main>
        {this.state.renderRecipeModal &&
          <RecipeModal onCloseRecipeModalClick={this.handleRecipeCardClick} />
        }
      </div>
    );
  }
}

export default App;
