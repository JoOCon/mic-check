import React from 'react';
import { shallow } from 'enzyme';
import { SignUp, mapStateToProps, mapDispatchToProps } from '../';
import * as mockData from '../../../mockData';
import * as actions from '../../../actions';

describe('SignUp tests', () => {
  let wrapper;
  let mockRunFunction;
  const { mockUser, mockUsers } = mockData;
  const { setActiveUser, addUser } = actions;
  beforeEach(() => {
    mockRunFunction = jest.fn();
    wrapper = shallow( 
      <SignUp 
        users={mockUsers}
        activeUser={mockUser}
        addUser={mockRunFunction}
        setActiveUser={mockRunFunction}
      /> 
    );
  });

  it('renders the SignUp with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have initial state', () => {
    const mockInitalState = {
      userName: '',
      email: '',
      phoneNumber: '',
      password: '',
      street: '',
      city: '',
      state: '',
      redirect: false
    };
    expect(wrapper.state()).toEqual(mockInitalState);
  });

  describe('handleChange Tests', () => {
    it('should have userName updated in state', () => {
      const mockUserNameEvent = {target: {name: 'userName', value: 'Jim'}};
      wrapper.instance().handleChange(mockUserNameEvent);
      const expected = mockUserNameEvent.target.value;
      const result = wrapper.state('userName');
      expect(result).toEqual(expected);
    });

    it('should have Email updated in state', () => {
      const mockEmailEvent = {target: {name: 'email', value: 'j@j'}};
      wrapper.instance().handleChange(mockEmailEvent);
      const expected = mockEmailEvent.target.value;
      const result = wrapper.state('email');
      expect(result).toEqual(expected);
    });

    it('should have phoneNumber updated in state', () => {
      const mockPhoneNumberEvent = {target: {name: 'phoneNumber', value: 3033334444}};
      wrapper.instance().handleChange(mockPhoneNumberEvent);
      const expected = mockPhoneNumberEvent.target.value;
      const result = wrapper.state('phoneNumber');
      expect(result).toEqual(expected);
    });

    it('should have password updated in state', () => {
      const mockPasswordEvent = {target: {name: 'password', value: 'j'}};
      wrapper.instance().handleChange(mockPasswordEvent);
      const expected = mockPasswordEvent.target.value;
      const result = wrapper.state('password');
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
  });

  describe('MapStateToProps', () => {
    it('should have a users data object in props', () => {
      const mockState = {users: mockUser};
      const expected = {users: mockUser};
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

  describe('MapDispatchToProps', () => {
    let mockDispatch;
    beforeEach(() => {
      mockDispatch = jest.fn();
    });

    it('should dispatch addUser when called', () => {
      const mockAction = addUser(mockUser);
      const props = mapDispatchToProps(mockDispatch);
      props.addUser(mockUser);
      expect(mockDispatch).toBeCalledWith(mockAction);
    });

    it('should dispatch setActiveUser when called', () => {
      const mockAction = setActiveUser(mockUser);
      const props = mapDispatchToProps(mockDispatch);
      props.setActiveUser(mockUser);
      expect(mockDispatch).toBeCalledWith(mockAction);
    });
  });
});
