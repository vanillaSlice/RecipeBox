import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from './Modal';
import Button from './Button';

import '../styles/RecipeFormModal.css';

class RecipeFormModal extends Component {
  state = {recipe: this.props.recipe};

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSave(this.state.recipe);
    this.setState({
      recipe: {
        name: '',
        ingredients: '',
        method: '',
        image: ''
      }
    });
  };

  onChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    this.setState(prevState => {
      const recipe = prevState.recipe;
      recipe[id] = value;
      return ({recipe: recipe});
    });
  };

  render() {
    return (
      <div className="RecipeFormModal">
        <Modal title={this.props.mode + " Recipe"} onClick={this.props.onClose}>
          <form onSubmit={this.onSubmit}>
            <label>
              Recipe name *
              <input
                type="text"
                id="name"
                value={this.state.recipe.name}
                onChange={this.onChange}
                required
                autoFocus
                autoComplete="false"
              />
            </label>
            <label>
              Ingredients *
              <textarea
                id="ingredients"
                value={this.state.recipe.ingredients}
                onChange={this.onChange}
                required 
                autoComplete="false"
              />
            </label>
            <label>
              Method *
              <textarea
                id="method"
                value={this.state.recipe.method}
                onChange={this.onChange}
                required 
                autoComplete="false"
              />
            </label>
            <label>
              Image URL (optional)
              <input
                type="URL"
                id="image"
                value={this.state.recipe.image}
                onChange={this.onChange}
                autoComplete="false"
              />
            </label>
            <Button type="submit" text="Save" />
          </form>
        </Modal>
      </div>
    );
  }
}

RecipeFormModal.propTypes = {
  mode: PropTypes.string,
  onClose: PropTypes.func,
  onSave: PropTypes.func,
  recipe: PropTypes.object
};

RecipeFormModal.defaultProps = {
  recipe: {
    name: '',
    ingredients: '',
    method: '',
    image: ''
  }
};

export default RecipeFormModal;
