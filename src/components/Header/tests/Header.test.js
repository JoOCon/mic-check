import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../';

describe('Header tests', () => {
  it('renders the Header component', () => {
    expect(shallow(<Header/>)).toMatchSnapshot();
  });
});
