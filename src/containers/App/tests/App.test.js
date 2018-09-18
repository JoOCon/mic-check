import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from '../';
import * as mockData from '../../../mockData';
import * as actions from '../../../actions';

describe('App tests', () => {
  let wrapper;
  let mockRunFunction;
  const { mockItems, mockUser, mockUsers, mockOrderInfo } = mockData;
  const { getLocalStorageUsers, getLocalStorageRentals, getLocalStorageOrders } = actions;
  beforeEach(() => {
    mockRunFunction = jest.fn();
    wrapper = shallow( 
      <App 
        activeUser={mockUser}
        getLocalStorageUsers={mockRunFunction}
        getLocalStorageRentals={mockRunFunction}
        getLocalStorageOrders={mockRunFunction}
      /> 
    );
  });

  it('renders the App with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('MapStateToProps', () => {
    it('should have a activeUser data object in props', () => {
      const mockState = {activeUser: mockUser};
      const expected = {activeUser: mockUser};
      const props = mapStateToProps(mockState);
      expect(props).toEqual(expected);
    });
  });

  describe('MapDispatchToProps', () => {
    let mockDispatch;
    beforeEach(() => {
      mockDispatch = jest.fn();
    });

    it('should dispatch getLocalStorageUsers when called', () => {
      const mockAction = getLocalStorageUsers(mockUsers);
      const props = mapDispatchToProps(mockDispatch);
      props.getLocalStorageUsers(mockUsers);
      expect(mockDispatch).toBeCalledWith(mockAction);
    });
    
    it('should dispatch getLocalStorageRentals when called', () => {
      const mockAction = getLocalStorageRentals(mockItems);
      const props = mapDispatchToProps(mockDispatch);
      props.getLocalStorageRentals(mockItems);
      expect(mockDispatch).toBeCalledWith(mockAction);
    });

    it('should dispatch getLocalStorageOrders when called', () => {
      const mockAction = getLocalStorageOrders([mockOrderInfo]);
      const props = mapDispatchToProps(mockDispatch);
      props.getLocalStorageOrders([mockOrderInfo]);
      expect(mockDispatch).toBeCalledWith(mockAction);
    });
  });
});
