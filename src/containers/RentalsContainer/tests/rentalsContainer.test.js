import React from 'react';
import { shallow } from 'enzyme';
import { RentalsContainer, mapStateToProps } from '../';
import * as mockData from '../../../mockData';

describe('RentalsContainer tests', () => {
  let wrapper;
  const { mockItems } = mockData;
  beforeEach(() => {
    wrapper = shallow( 
      <RentalsContainer 
        rentals={mockItems}
      /> 
    );
  });

  it('renders the RentalsContainer with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('MapStateToProps', () => {
    it('should have a rentals data object in props', () => {
      const mockState = {rentals: mockItems};
      const expected = {rentals: mockItems};
      const props = mapStateToProps(mockState);
      expect(props).toEqual(expected);
    });
  });
});
