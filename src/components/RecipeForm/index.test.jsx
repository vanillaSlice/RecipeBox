import React from 'react';
import { shallow } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';

import RecipeForm from './';
import TestUtils from './testUtils';

describe('RecipeForm', () => {
  it('renders name', () => {
    const recipeForm = shallow(<RecipeForm name="test-name" />);
    expect(recipeForm.find('#name').props().value).toBe('test-name');
  });

  it('renders ingredients', () => {
    const recipeForm = shallow(<RecipeForm ingredients="test-ingredients" />);
    expect(recipeForm.find('#ingredients').props().value).toBe('test-ingredients');
  });

  it('renders method', () => {
    const recipeForm = shallow(<RecipeForm method="test-method" />);
    expect(recipeForm.find('#method').props().value).toBe('test-method');
  });

  it('renders image', () => {
    const recipeForm = shallow(<RecipeForm image="test-image" />);
    expect(recipeForm.find('#image').props().value).toBe('test-image');
  });

  it('renders save button', () => {
    const recipeForm = shallow(<RecipeForm />);
    expect(recipeForm.find('#save').props().text).toBe('Save');
  });

  describe('on form submit', () => {
    const onSave = (recipe) => {
      expect(recipe).toEqual({
        name: 'test-name',
        ingredients: 'test-ingredients',
        method: 'test-method',
        image: 'test-image',
      });
    };
    const component = ReactTestUtils.renderIntoDocument(<RecipeForm onSave={onSave} />);

    TestUtils.updateName(component, 'test-name');
    TestUtils.updateIngredients(component, 'test-ingredients');
    TestUtils.updateMethod(component, 'test-method');
    TestUtils.updateImage(component, 'test-image');

    TestUtils.submit(component);

    it('clears form', () => {
      expect(TestUtils.getName(component)).toBe('');
      expect(TestUtils.getIngredients(component)).toBe('');
      expect(TestUtils.getMethod(component)).toBe('');
      expect(TestUtils.getImage(component)).toBe('');
    });

    it('renders save message', () => {
      const saveMessage = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'save-message');
      expect(saveMessage.textContent).toBe('Saved recipe!');
    });
  });

  describe('clear button', () => {
    const recipeForm = shallow((
      <RecipeForm
        name="test-name"
        ingredients="test-ingredients"
        method="test-method"
        image="test-image"
      />
    ));
    const clearButton = recipeForm.find('#clear');

    it('renders', () => {
      expect(clearButton.length).toBe(1);
    });

    it('clears form on click', () => {
      clearButton.simulate('click');
      expect(recipeForm.find('#name').props().value).toBe('');
      expect(recipeForm.find('#ingredients').props().value).toBe('');
      expect(recipeForm.find('#method').props().value).toBe('');
      expect(recipeForm.find('#image').props().value).toBe('');
    });
  });
});
