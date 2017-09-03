import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Input from './Input';

it('renders with type', () => {
  const input = shallow(<Input type="URL" />);
  expect(input.props().type).toEqual('URL');
});

it('renders with id', () => {
  const input = shallow(<Input id="test-id" />);
  expect(input.props().id).toEqual('test-id');
});

it('renders with value', () => {
  const input = shallow(<Input value="test-value" />);
  expect(input.props().value).toEqual('test-value');
});

it('triggers function onChange', () => {
  const onChange = sinon.spy();
  const input = shallow((<Input onChange={onChange} />));
  input.simulate('change');
  expect(onChange.callCount).toEqual(1);
});

it('renders required', () => {
  const input = shallow(<Input required />);
  expect(input.props().required).toEqual(true);
});

it('renders autoFocus', () => {
  const input = shallow(<Input autoFocus />);
  expect(input.props().autoFocus).toEqual(true);
});
