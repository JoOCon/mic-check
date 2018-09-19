import React from 'react';
import { shallow } from 'enzyme';
import { RentalConfirmation, mapStateToProps, mapDispatchToProps } from '../';
import { createDeliveryPost } from '../../../thunk/createDeliveryPost';
import * as mockData from '../../../mockData';
import * as actions from '../../../actions';

jest.mock('../../../thunk/createDeliveryPost');

describe('RentalConfirmation tests', () => {
  let wrapper;
  let mockRunFunction;
  const { mockItem, mockUser, mockOrderInfo, mockQuoteData } = mockData;
  beforeEach(() => {
    mockRunFunction = jest.fn();
    wrapper = shallow( 
      <RentalConfirmation 
        quote={mockQuoteData}
        activeUser={mockUser}
        selectedItem={mockItem}
        createDeliveryPost={mockRunFunction}
        removeRental={mockRunFunction}
      /> 
    );
  });

  it('renders the RentalConfirmation with the correct props', () => {
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

    it('should have a quote data object in props', () => {
      const mockState = {quote: mockQuoteData};
      const expected = {quote: mockQuoteData};
      const props = mapStateToProps(mockState);
      expect(props).toEqual(expected);
    });

    it('should have a selectedItem data object in props', () => {
      const mockState = {selectedItem: mockItem};
      const expected = {selectedItem: mockItem};
      const props = mapStateToProps(mockState);
      expect(props).toEqual(expected);
    });
  });

  describe('MapDispatchToProps', () => {
    let mockDispatch;
    beforeEach(() => {
      mockDispatch = jest.fn();
    });

    it('should dispatch createDeliveryPost when called', () => {
      const mockAction = createDeliveryPost(mockOrderInfo);
      const props = mapDispatchToProps(mockDispatch);
      props.createDeliveryPost(mockOrderInfo);
      expect(mockDispatch).toBeCalledWith(mockAction);
    });

    it('should dispatch removeRental when called', () => {
      const { removeRental } = actions;
      const mockAction = removeRental(mockItem);
      const props = mapDispatchToProps(mockDispatch);
      props.removeRental(mockItem);
      expect(mockDispatch).toBeCalledWith(mockAction);
    });
  });
});
