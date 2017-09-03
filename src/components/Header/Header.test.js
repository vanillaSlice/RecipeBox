import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

it('renders an h1', () => {
  const header = shallow(<Header />);
  expect(header.find('h1').length).toEqual(1);
});

it('renders an IconButton', () => {
  const header = shallow(<Header />);
  expect(header.find('IconButton').length).toEqual(1);
});

it('IconButton is given onClick function', () => {
  const onClick = () => {};
  const header = shallow(<Header onClick={onClick} />);
  expect(header.find('IconButton').props().onClick).toEqual(onClick);
});
