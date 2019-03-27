import React from 'react';
import { shallow } from 'enzyme';
import AddScan from './AddScan';

describe('Capacity root filters', () => {
  it('shall match snapshot', () => {
    const wrapper = shallow(<AddScan />);
    expect(wrapper).toMatchSnapshot();
  });

});