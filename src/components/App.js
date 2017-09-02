import React, { Component } from 'react';

import AppHeader from './AppHeader';
import RecipeCard from './RecipeCard';
import RecipeDisplayModal from './RecipeDisplayModal';
import RecipeFormModal from './RecipeFormModal';

import '../styles/App.css';

class App extends Component {
  state = {
    recipes: [{},{},{},{},{},{},{},{},{}],
    selectedRecipe: {name: "Fooooood",
    ingredients: `small pack tarragon

2 small packs flat-leaf parsley

30g wild garlic (or 2 garlic cloves)

3 tsp Dijon mustard

40g small capers, drained, rinsed and roughly chopped

200ml extra virgin olive oil

2 tbsp sherry vinegar`
  ,
  method: `1. In a large frying pan, heat the oil and add the garlic. Fry until golden, then add the beans. Pour in the cider vinegar, honey and spices along with 1 tsp or more of salt, to taste. Cook until warmed through, crushing gently with the back of your wooden spoon, then set aside.

2. The best way to make the guacamole is with a large stone pestle and mortar, but you can use a medium bowl and a flat-ended rolling pin instead. Crush the garlic, coriander and chilli into a rough paste. Scoop in the avocado with a little salt and crush roughly – you want it chunky, not smooth. Squeeze in the lime juice and set aside.

3. Mix the salsa ingredients in a small bowl. Heat a griddle pan or steamer and quickly griddle the tortillas or steam a stack of them to warm up. Reheat the bean mixture.

4. To serve, put 1-2 heaped tbsp of beans on a tortilla. Top with a big spoonful of guacamole and some salsa, hot sauce and a dollop of soured cream or yogurt.
  `,
  image: 'http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/spicy-black-bean-tacos.jpg?itok=RTBXRL7L'}
  ,
    mode: '',
    displayModal: false
  }

  handleCardClick = () => {
    this.setState(prevState => ({
      displayModal: true,
      mode: 'Display'
    }))
  }

  handleAddClick = () => {
    this.setState(prevState => ({
      displayModal: true,
      mode: 'Add'
    }))
  };

  handleEditClick = () => {
    this.setState(prevState => ({
      displayModal: true,
      mode: 'Edit'
    }))
  }

  toggleModalDisplay = () => {
    this.setState(prevState => ({
      displayModal: !prevState.displayModal
    }))
  }

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
      row.push( (<RecipeCard 
        name="Recipe Name"
        image="http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--52867_12.jpg?itok=pnLXWqFK"
        onClick={this.handleCardClick} />)
          );
    });
    return rows;
  }

  getModal = () => {
    if (this.state.mode === 'Display') {
      return (
        <RecipeDisplayModal
          recipe={this.state.selectedRecipe} 
          onClose={this.toggleModalDisplay}
          onEdit={this.handleEditClick}
          onDelete={() => console.log('delete')}
        />
      );
    } else if (this.state.mode === 'Add') {
      return (
        <RecipeFormModal
          onClose={this.toggleModalDisplay}
          onSave={(recipe) => console.log(recipe)}
          mode={this.state.mode}
        />
      );
    } else {
      return (
        <RecipeFormModal
          recipe={this.state.selectedRecipe} 
          onClose={this.toggleModalDisplay}
          onSave={(recipe) => console.log(recipe)}
          mode={this.state.mode}
        />
      );
    }
  };

  render() {
    return (
      <div className="App">
        <AppHeader onClick={this.handleAddClick} />
        <main className="main">
          {this.getRows().map(row => 
            (<div className="row">{row}</div>)
          )}
        </main>
        {this.state.displayModal && this.getModal()}

      </div>
    );
  }
}

export default App;
