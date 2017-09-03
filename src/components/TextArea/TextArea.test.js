import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import TextArea from './TextArea';

it('renders with id', () => {
  const textArea = shallow(<TextArea id="test-id" />);
  expect(textArea.props().id).toEqual('test-id');
});

it('renders with value', () => {
  const textArea = shallow(<TextArea value="test-value" />);
  expect(textArea.props().value).toEqual('test-value');
});

it('triggers function onChange', () => {
  const onChange = sinon.spy();
  const textArea = shallow(<TextArea onChange={onChange} />);
  textArea.simulate('change');
  expect(onChange.callCount).toEqual(1);
});

it('renders required', () => {
  const textArea = shallow(<TextArea required />);
  expect(textArea.props().required).toEqual(true);
});
