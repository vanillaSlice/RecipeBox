import React from 'react';
import { mount, shallow } from 'enzyme';

import RecipeDisplay from './RecipeDisplay';

it('renders recipe image', () => {
  const recipeDisplay = shallow(<RecipeDisplay image="test-image.jpg" />);
  expect(recipeDisplay.find('img').props().src).toEqual('test-image.jpg');
});

it('renders name in image alt attribute', () => {
  const recipeDisplay = shallow(<RecipeDisplay name="test-image" />);
  expect(recipeDisplay.find('img').props().alt).toEqual('test-image');
});

it('renders name in image title attribute', () => {
  const recipeDisplay = shallow(<RecipeDisplay name="test-image" />);
  expect(recipeDisplay.find('img').props().title).toEqual('test-image');
});

it('renders recipe ingredients', () => {
  const recipeDisplay = shallow(<RecipeDisplay ingredients="test-ingredients" />);
  expect(recipeDisplay.find('.recipe-info p').at(0).text()).toEqual('test-ingredients');
});

it('renders recipe method', () => {
  const recipeDisplay = shallow(<RecipeDisplay method="test-method" />);
  expect(recipeDisplay.find('.recipe-info p').at(1).text()).toEqual('test-method');
});

it('renders edit button', () => {
  const recipeDisplay = mount(<RecipeDisplay />);
  expect(recipeDisplay.find('Button').at(0).text()).toEqual('Edit');
});

it('renders delete button', () => {
  const recipeDisplay = mount(<RecipeDisplay />);
  expect(recipeDisplay.find('Button').at(1).text()).toEqual('Delete');
});

it('edit button is given edit function', () => {
  const onEdit = () => {};
  const recipeDisplay = shallow(<RecipeDisplay onEdit={onEdit} />);
  expect(recipeDisplay.find('Button').at(0).props().onClick).toEqual(onEdit);
});

it('delete button is given delete function', () => {
  const onDelete = () => {};
  const recipeDisplay = shallow(<RecipeDisplay onDelete={onDelete} />);
  expect(recipeDisplay.find('Button').at(1).props().onClick).toEqual(onDelete);
});
