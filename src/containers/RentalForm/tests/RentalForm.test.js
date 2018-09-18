import React from 'react';
import { shallow } from 'enzyme';
import { RentalForm, mapStateToProps, mapDispatchToProps } from '../';
import * as mockData from '../../../mockData';
import * as actions from '../../../actions';

describe('RentalForm tests', () => {
  let wrapper;
  let mockRunFunction;
  const { mockUser, mockItem } = mockData;
  const { addRental, removeRental } = actions;
  beforeEach(() => {
    mockRunFunction = jest.fn();
    wrapper = shallow( 
      <RentalForm 
        activeUser={mockUser}
        addRental={mockRunFunction}
        removeRental={mockRunFunction}
      /> 
    );
  });

  it('renders the RentalForm with the correct props', () => {
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

    it('should dispatch addRental when called', () => {
      const mockAction = addRental(mockItem);
      const props = mapDispatchToProps(mockDispatch);
      props.addRental(mockItem);
      expect(mockDispatch).toBeCalledWith(mockAction);
    });

    it('should dispatch removeRental when called', () => {
      const mockAction = removeRental(mockItem);
      const props = mapDispatchToProps(mockDispatch);
      props.removeRental(mockItem);
      expect(mockDispatch).toBeCalledWith(mockAction);
    });
  });
});
