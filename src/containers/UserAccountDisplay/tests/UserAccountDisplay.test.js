import React from 'react';
import { shallow } from 'enzyme';
import { UserAccountDisplay, mapStateToProps } from '../';
import * as mockData from '../../../mockData';

describe('UserAccountDisplay tests', () => {
  let wrapper;
  const { mockUser, mockOrderConfirmation } = mockData;
  beforeEach(() => {
    wrapper = shallow( 
      <UserAccountDisplay 
        completedOrders={[mockOrderConfirmation]}
        activeUser={mockUser}
      /> 
    );
  });

  it('renders the UserAccountDisplay with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('MapStateToProps', () => {
    it('should have a completedOrders data object in props', () => {
      const mockState = {completedOrders: [mockOrderConfirmation]};
      const expected = {completedOrders: [mockOrderConfirmation]};
      const props = mapStateToProps(mockState);
      expect(props).toEqual(expected);
    });

    it('should have a activeUser data object in props', () => {
      const mockState = {activeUser: mockUser};
      const expected = {activeUser: mockUser};
      const props = mapStateToProps(mockState);
      expect(props).toEqual(expected);
    });
  });
});
