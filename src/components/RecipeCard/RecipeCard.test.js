import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import RecipeCard from './RecipeCard';

it('triggers function when clicked', () => {
  const onClick = sinon.spy();
  const recipeCard = shallow(<RecipeCard onClick={onClick} />);
  recipeCard.simulate('click');
  expect(onClick.callCount).toEqual(1);
});

it('renders image', () => {
  const recipeCard = shallow(<RecipeCard image="test-image.jpg" />);
  const image = recipeCard.find('.image');
  expect(image.props().style.backgroundImage).toEqual('url(\'test-image.jpg\')');
});

it('renders name', () => {
  const recipeCard = shallow(<RecipeCard name="test-name" />);
  expect(recipeCard.find('h2').text()).toEqual('test-name');
});
