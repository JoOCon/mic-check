import React from 'react';
import { shallow } from 'enzyme';
import { RentalCard, mapStateToProps, mapDispatchToProps } from '../';
import { getDeliveryQuote } from '../../../thunk/getDeliveryQuote';
import * as mockData from '../../../mockData';
import * as actions from '../../../actions';

jest.mock('../../../thunk/getDeliveryQuote');

describe('RentalsCard tests', () => {
  let wrapper;
  let mockRunFunction;
  const { mockItem, mockUser, mockSenderLocation, mockDeliveryLocation } = mockData;
  beforeEach(() => {
    mockRunFunction = jest.fn();
    wrapper = shallow( 
      <RentalCard 
        rental={mockItem}
        activeUser={mockUser}
        getDeliveryQuote={mockRunFunction}
        selectedItem={mockRunFunction}
      /> 
    );
  });

  it('renders the RentalCard with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have initial state', () => {
    const mockInitalState = {
      redirect: false
    };
    expect(wrapper.state()).toEqual(mockInitalState);
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

    it('should dispatch getDeliveryQuote when called', () => {
      const mockAction = getDeliveryQuote(mockSenderLocation, mockDeliveryLocation);
      const props = mapDispatchToProps(mockDispatch);
      props.getDeliveryQuote(mockSenderLocation, mockDeliveryLocation);
      expect(mockDispatch).toBeCalledWith(mockAction);
    });

    it('should dispatch selectedItem when called', () => {
      const { selectedItem } = actions;
      const mockAction = selectedItem(mockItem);
      const props = mapDispatchToProps(mockDispatch);
      props.selectedItem(mockItem);
      expect(mockDispatch).toBeCalledWith(mockAction);
    });
  });
});
