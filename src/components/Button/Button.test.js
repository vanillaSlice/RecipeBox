import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Button from './Button';

it('renders with type', () => {
  const button = shallow(<Button type="submit" />);
  expect(button.props().type).toEqual('submit');
});

it('renders with style class', () => {
  const button = shallow(<Button style="danger" />);
  expect(button.hasClass('danger'));
});

it('triggers function when clicked', () => {
  const onClick = sinon.spy();
  const button = shallow(<Button onClick={onClick} />);
  button.simulate('click');
  expect(onClick.callCount).toEqual(1);
});

it('renders with text', () => {
  const button = shallow(<Button text="test" />);
  expect(button.text()).toEqual('test');
});
