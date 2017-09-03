import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils'; 

import RecipeForm from './RecipeForm';

it('renders name', () => {
  const recipeForm = mount(<RecipeForm name="test-name" />);
  expect(recipeForm.find('Input').at(0).props().value).toEqual('test-name');
});

it('renders ingredients', () => {
  const recipeForm = mount(<RecipeForm ingredients="test-ingredients" />);
  expect(recipeForm.find('TextArea').at(0).props().value).toEqual('test-ingredients');
});

it('renders method', () => {
  const recipeForm = mount(<RecipeForm method="test-method" />);
  expect(recipeForm.find('TextArea').at(1).props().value).toEqual('test-method');
});

it('renders image', () => {
  const recipeForm = mount(<RecipeForm image="test-image" />);
  expect(recipeForm.find('Input').at(1).props().value).toEqual('test-image');
});

it('renders submit button', () => {
  const recipeForm = mount(<RecipeForm />);
  expect(recipeForm.find('Button').at(0).text()).toEqual('Save');
});

it('renders clear button', () => {
  const recipeForm = mount(<RecipeForm />);
  expect(recipeForm.find('Button').at(1).text()).toEqual('Clear');
});

it('save function called on form submit', () => {
  const onSave = sinon.spy();
  const recipeForm = mount(<RecipeForm onSave={onSave} />);
  recipeForm.simulate('submit');
  expect(onSave.callCount).toEqual(1);
});

it('save function is passed recipe on form submit', () => {
  // assert we have received expected recipe from form
  const onSave = (recipe) => {
    expect(recipe).toEqual({
      name: 'test-name',
      ingredients: 'test-ingredients',
      method: 'test-method',
      image: 'test-image'
    });
  };

  const component = ReactTestUtils.renderIntoDocument(<RecipeForm onSave={onSave} />);
  const recipeForm = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'form');
  const inputs = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'input');
  const textareas = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'textarea');
  const name = inputs[0];
  const ingredients = textareas[0];
  const method = textareas[1];
  const image = inputs[1];

  // update all the form values
  name.value = 'test-name';
  ReactTestUtils.Simulate.change(name);
  ingredients.value = 'test-ingredients';
  ReactTestUtils.Simulate.change(ingredients);
  method.value = 'test-method';
  ReactTestUtils.Simulate.change(method);
  image.value = 'test-image';
  ReactTestUtils.Simulate.change(image);

  // submit changes
  ReactTestUtils.Simulate.submit(recipeForm);
});

it('display save message on save', () => {
  const onSave = sinon.spy();
  const recipeForm = mount(<RecipeForm onSave={onSave} />);
  recipeForm.simulate('submit');
  const spans = recipeForm.find('span');
  const saveMessage = spans.at(spans.length - 1);
  expect(saveMessage.text()).toEqual('Saved recipe!');
});

describe('resets form to original props on form submit', () => {
  const component = ReactTestUtils.renderIntoDocument(<RecipeForm onSave={() => {}} />);
  const recipeForm = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'form');
  const inputs = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'input');
  const textareas = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'textarea');
  const name = inputs[0];
  const ingredients = textareas[0];
  const method = textareas[1];
  const image = inputs[1];

  // update all the form values
  name.value = 'test-name';
  ReactTestUtils.Simulate.change(name);
  ingredients.value = 'test-ingredients';
  ReactTestUtils.Simulate.change(ingredients);
  method.value = 'test-method';
  ReactTestUtils.Simulate.change(method);
  image.value = 'test-image';
  ReactTestUtils.Simulate.change(image);

  // submit changes
  ReactTestUtils.Simulate.submit(recipeForm);

  it('name is cleared', () => {
    expect(name.value).toEqual('');
  });
  it('ingredients are cleared', () => {
    expect(ingredients.value).toEqual('');
  });
  it('method is cleared', () => {
    expect(method.value).toEqual('');
  });
  it('image is cleared', () => {
    expect(image.value).toEqual('');
  });
});

describe('clears form on clear button click', () => {
  const recipeForm = mount((
    <RecipeForm 
      name="test-name"
      ingredients="test-ingredients"
      method="test-method"
      image="test-image"
    />
  ));
});

it('name is cleared on clear button click', () => {
  const recipeForm = mount(<RecipeForm name="test-name" />);
  recipeForm.find('Button').at(1).simulate('click');
  expect(recipeForm.find('Input').at(0).props().value).toEqual('');
});

it('ingredients are cleared on clear button click', () => {
  const recipeForm = mount(<RecipeForm ingredients="test-ingredients" />);
  recipeForm.find('Button').at(1).simulate('click');
  expect(recipeForm.find('TextArea').at(0).props().value).toEqual('');
});

it('method is cleared on clear button click', () => {
  const recipeForm = mount(<RecipeForm method="test-method" />);
  recipeForm.find('Button').at(1).simulate('click');
  expect(recipeForm.find('TextArea').at(1).props().value).toEqual('');
});

it('image is cleared on clear button click', () => {
  const recipeForm = mount(<RecipeForm image="test-image" />);
  recipeForm.find('Button').at(1).simulate('click');
  expect(recipeForm.find('Input').at(1).props().value).toEqual('');
});
