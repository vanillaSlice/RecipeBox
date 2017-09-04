import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Label from '../Label/Label';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';

import './RecipeForm.css';

class RecipeForm extends Component {
  state = {
    name: this.props.name,
    ingredients: this.props.ingredients,
    method: this.props.method,
    image: this.props.image,
    saved: false
  };

  onSubmit = (e) => {
    e.preventDefault();

    // save this recipe
    this.props.onSave({
      name: this.state.name,
      ingredients: this.state.ingredients,
      method: this.state.method,
      image: this.state.image,
    });

    // reset form and note that we've saved recipe
    this.setState({
      name: '',
      ingredients: '',
      method: '',
      image: '',
      saved: true
    });
  };

  onChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    this.setState({
      [id]: value, 
      saved: false
    });
  };

  onClear = (e) => {
    this.setState({
      name: '',
      ingredients: '',
      method: '',
      image: '',
      saved: false
    });
  };

  render = () => {
    return (
      <form className="RecipeForm" onSubmit={this.onSubmit}>
        <Label>
          Recipe name *
          <Input
            id="name"
            value={this.state.name}
            onChange={this.onChange}
            required
            autoFocus
          />
        </Label>
        <Label>
          Ingredients *
          <TextArea
            id="ingredients"
            value={this.state.ingredients}
            onChange={this.onChange}
            required
          />
        </Label>
        <Label>
          Method *
          <TextArea
            id="method"
            value={this.state.method}
            onChange={this.onChange}
            required
          />
        </Label>
        <Label>
          Image URL (optional)
          <Input
            type="URL"
            id="image"
            value={this.state.image}
            onChange={this.onChange}
          />
        </Label>
        <Button id="save" type="submit" text="Save" />
        <Button id="clear" text="Clear" onClick={this.onClear} />
        {this.state.saved && <span className="save-message">Saved recipe!</span>}
      </form>
    );
  };
}

RecipeForm.propTypes = {
  name: PropTypes.string,
  ingredients: PropTypes.string,
  method: PropTypes.string,
  image: PropTypes.string,
  onSave: PropTypes.func
};

RecipeForm.defaultProps = {
  name: '',
  ingredients: '',
  method: '',
  image: ''
};

export default RecipeForm;
