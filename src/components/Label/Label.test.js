import React from 'react';
import { shallow } from 'enzyme';

import Label from './Label';

describe('Label', () => {
  const child = <div />;
  const label = shallow(<Label text="test-text">{child}</Label>);

  test('renders text', () => {
    expect(label.text()).toBe('test-text');
  });

  test('renders children', () => {
    expect(label.contains(child)).toBe(true);
  });
});
