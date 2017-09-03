import React from 'react';
import { shallow } from 'enzyme';

import Label from './Label';

it('renders with text', () => {
  const label = shallow(<Label text="test-label" />);
  expect(label.text()).toEqual('test-label');
});

it('renders children', () => {
  const child = (<div />);
  const label = shallow((
    <Label text="test-label">
      {child}
    </Label>
  ));
  expect(label.contains(child)).toEqual(true);
});
