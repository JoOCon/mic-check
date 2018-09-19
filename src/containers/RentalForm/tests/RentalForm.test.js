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

  it('should have initial state', () => {
    const mockInitalState = {
      name: '',
      street: '',
      city: '',
      state: '',
      description: '',
      image: '',
      rentalPrice: '',
      redirect: false
    };
    expect(wrapper.state()).toEqual(mockInitalState);
  });

  describe('handleChange Tests', () => {
    it('should have name updated in state', () => {
      const mockNameEvent = {target: {name: 'name', value: 'Jim'}};
      wrapper.instance().handleChange(mockNameEvent);
      const expected = mockNameEvent.target.value;
      const result = wrapper.state('name');
      expect(result).toEqual(expected);
    });

    it('should have street updated in state', () => {
      const mockStreetEvent = {target: {name: 'street', value: '234 ivy st.'}};
      wrapper.instance().handleChange(mockStreetEvent);
      const expected = mockStreetEvent.target.value;
      const result = wrapper.state('street');
      expect(result).toEqual(expected);
    });

    it('should have city updated in state', () => {
      const mockCityEvent = {target: {name: 'city', value: 'Denver'}};
      wrapper.instance().handleChange(mockCityEvent);
      const expected = mockCityEvent.target.value;
      const result = wrapper.state('city');
      expect(result).toEqual(expected);
    });

    it('should have state updated in state', () => {
      const mockStateEvent = {target: {name: 'state', value: 'CO'}};
      wrapper.instance().handleChange(mockStateEvent);
      const expected = mockStateEvent.target.value;
      const result = wrapper.state('state');
      expect(result).toEqual(expected);
    });

    it('should have description updated in state', () => {
      const mockDescriptionEvent = {target: {name: 'description', value: 'fun times'}};
      wrapper.instance().handleChange(mockDescriptionEvent);
      const expected = mockDescriptionEvent.target.value;
      const result = wrapper.state('description');
      expect(result).toEqual(expected);
    });

    it('should have image updated in state', () => {
      const mockImageEvent = {target: {name: 'image', value: 'http://img.jpg'}};
      wrapper.instance().handleChange(mockImageEvent);
      const expected = mockImageEvent.target.value;
      const result = wrapper.state('image');
      expect(result).toEqual(expected);
    });

    it('should have rentalPrice updated in state', () => {
      const mockRentalPriceEvent = {target: {name: 'rentalPrice', value: 50}};
      wrapper.instance().handleChange(mockRentalPriceEvent);
      const expected = mockRentalPriceEvent.target.value;
      const result = wrapper.state('rentalPrice');
      expect(result).toEqual(expected);
    });
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
