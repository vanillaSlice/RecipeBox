import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import IconButton from './IconButton';

it('renders with style class', () => {
  const button = shallow(<IconButton style="light" />);
  expect(button.hasClass('light'));
});

it('triggers function when clicked', () => {
  const onClick = sinon.spy();
  const button = shallow((<IconButton onClick={onClick} />));
  button.simulate('click');
  expect(onClick.callCount).toEqual(1);
});

it('renders icon', () => {
  const button = mount(<IconButton icon="close" />);
  expect(button.find('.fa').hasClass('fa-close'));
});

it('renders description', () => {
  const button = shallow(<IconButton description="test-description" />);
  expect(button.find('span').text()).toEqual('test-description');
});
