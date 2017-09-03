import React, { Component } from 'react';

import Header from '../Header/Header';
import RecipeCard from '../RecipeCard/RecipeCard';
import Modal from '../Modal/Modal';
import RecipeDisplay from '../RecipeDisplay/RecipeDisplay';
import RecipeForm from '../RecipeForm/RecipeForm';

import data from '../../data/recipes.json';

import './App.css';

class App extends Component {
  state = {
    recipes: JSON.parse(localStorage.getItem('recipes')) || data.recipes,
    temporaryRecipe: {},
    success: false,
    selectedRecipe: '',
    mode: '',
    displayModal: false
  };

  handleCardClick = () => {
    this.setState(prevState => ({
      displayModal: true,
      mode: 'Display'
    }))
  };

  handleAddClick = () => {
    this.setState(prevState => ({
      displayModal: true,
      mode: 'Add',
      temporaryRecipe: {},
      success: false
    }))
  };

  handleEditClick = () => {
    this.setState(prevState => ({
      displayModal: true,
      mode: 'Edit',
      temporaryRecipe: Object.assign({} ,this.state.selectedRecipe),
      success: false
    }))
  };

  handleDeleteClick = () => {
    this.state.recipes.forEach((recipe, index) => {
      if (recipe === this.state.selectedRecipe) {
        let recipes = [...this.state.recipes];
        recipes.splice(index, 1);
        this.setState(prevState => ({
          displayModal: false, 
          recipes: recipes
        }));
        localStorage.setItem('recipes', JSON.stringify(recipes));
      }
    });
  };

  toggleModalDisplay = () => {
    this.setState(prevState => ({
      displayModal: !prevState.displayModal
    }))
  };

  getRows = () => {
    const rows = [];
    this.state.recipes.forEach((recipe, index) => {
      let row;
      if (index % 3 === 0) {
        row = [];
        rows.push(row);
      } else {
        row = rows[Math.floor(index / 3)];
      }
      row.push( (<RecipeCard key={index}
        name={this.state.recipes[index].name}
        image={this.state.recipes[index].image}
        onClick={() => {this.setState({selectedRecipe: this.state.recipes[index]}); this.handleCardClick();}} />)
          );
    });
    return rows;
  };

  getModal = () => {
    if (this.state.mode === 'Display') {
      return (
        <Modal onClick={this.toggleModalDisplay} title={this.state.selectedRecipe.name}>
          <RecipeDisplay 
            {...this.state.selectedRecipe}
            onEdit={this.handleEditClick}
            onDelete={this.handleDeleteClick} 
          />
        </Modal>
      );
    } else {
      return (
        <Modal onClick={this.toggleModalDisplay} title={this.state.selectedRecipe.name}>
          <RecipeForm name="" ingredients="" method="" image="" onSave={(recipe) => {console.log(recipe);
            this.setState({selectedRecipe: {}})}}
          />
        </Modal>

        // <RecipeFormModal
        //   mode={this.state.mode}
        //   onClose={this.toggleModalDisplay}
        //   onSubmit={this.onSubmit}
        //   onChange={this.onChange}
        //   recipe={this.state.temporaryRecipe}
        //   success={this.state.success}
        // />
      );
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      success: true
    });
    if (this.state.mode === 'Add') {
      this.setState({
        temporaryRecipe: {
          name: '',
          ingredients: '',
          method: '',
          image: ''
        }
      });
      const recipes = [...this.state.recipes];
      recipes.push(this.state.temporaryRecipe);
      this.setState({recipes: recipes});
      localStorage.setItem('recipes', JSON.stringify(recipes));
    } else {
      this.state.recipes.forEach((recipe, index) => {
        if (recipe === this.state.selectedRecipe) {
          const recipes = [...this.state.recipes];
          recipes[index] = Object.assign({}, this.state.temporaryRecipe);
          this.setState({recipes: recipes});
          localStorage.setItem('recipes', JSON.stringify(recipes));
        }
      });
    }
  };

  onChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    this.setState(prevState => {
      const temporaryRecipe = prevState.temporaryRecipe;
      temporaryRecipe[id] = value;
      return ({temporaryRecipe: temporaryRecipe, success: false});
    });
  };

  render() {
    return (
      <div className="App">
        <Header onClick={this.handleAddClick} />
        <main className="main">
          {this.getRows().map((row, index) => 
            (<div className="row" key={index}>{row}</div>)
          )}
        </main>
        {this.state.displayModal && this.getModal()}

      </div>
    );
  }
}

export default App;
