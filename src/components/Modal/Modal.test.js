import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Modal from './Modal';

it('modal triggers function when clicked', () => {
  const onClick = sinon.spy();
  const modal = shallow(<Modal onClick={onClick} />);
  modal.simulate('click');
  expect(onClick.callCount).toEqual(1);
});

it('renders title', () => {
  const modal = shallow(<Modal title="test-title" />);
  expect(modal.find('h2').text()).toEqual('test-title');
});

it('renders an IconButton', () => {
  const modal = shallow(<Modal />);
  expect(modal.find('IconButton').length).toEqual(1);
});

it('IconButton is given onClick function', () => {
  const onClick = () => {};
  const modal = shallow(<Modal onClick={onClick} />);
  expect(modal.find('IconButton').props().onClick).toEqual(onClick);
});

it('renders children', () => {
  const child = (<div />);
  const modal = shallow((
    <Modal>
      {child}
    </Modal>
  ));
  expect(modal.contains(child)).toEqual(true);
});
