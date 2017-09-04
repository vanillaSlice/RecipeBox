import React from 'react';
import { shallow } from 'enzyme';

import RecipeCard from './RecipeCard';

describe('RecipeCard', () => {
  const onClick = jest.fn();
  const recipeCard = shallow((
    <RecipeCard
      onClick={onClick}
      image="test-image.jpg"
      name="test-name"
    />
  ));

  test('function triggered when clicked', () => {
    recipeCard.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('renders image', () => {
    const image = recipeCard.find('.image');
    expect(image.props().style.backgroundImage).toBe('url(\'test-image.jpg\')');
  });

  test('renders recipe name', () => {
    expect(recipeCard.find('h2').text()).toBe('test-name');
  });
});
