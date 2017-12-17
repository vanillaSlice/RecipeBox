import React from 'react';
import { shallow } from 'enzyme';

import Input from './';

describe('Input', () => {
  const onChange = jest.fn();
  const input = shallow((
    <Input
      type="URL"
      id="test-id"
      value="test-value"
      onChange={onChange}
      required
      autoFocus
    />
  ));

  test('renders type', () => {
    expect(input.props().type).toBe('URL');
  });

  test('renders id', () => {
    expect(input.props().id).toBe('test-id');
  });

  test('renders value', () => {
    expect(input.props().value).toBe('test-value');
  });

  test('function is triggered when changed', () => {
    input.simulate('change');
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('renders required attribute', () => {
    expect(input.props().required).toBe(true);
  });

  test('renders autoFocus attribute', () => {
    expect(input.props().autoFocus).toBe(true);
  });
});
