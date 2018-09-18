import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapStateToProps, mapDispatchToProps } from '../';
import * as mockData from '../../../mockData';
import * as actions from '../../../actions';

describe('Login tests', () => {
  let wrapper;
  let mockRunFunction;
  const { mockUser, mockUsers } = mockData;
  const { setActiveUser } = actions;
  beforeEach(() => {
    mockRunFunction = jest.fn();
    wrapper = shallow( 
      <Login 
        users={mockUsers}
        activeUser={mockUser}
        setActiveUser={mockRunFunction}
      /> 
    );
  });

  it('renders the Login with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('MapStateToProps', () => {
    it('should have a users data object in props', () => {
      const mockState = {users: mockUsers};
      const expected = {users: mockUsers};
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

    it('should dispatch setActiveUser when called', () => {
      const mockAction = setActiveUser(mockUser);
      const props = mapDispatchToProps(mockDispatch);
      props.setActiveUser(mockUser);
      expect(mockDispatch).toBeCalledWith(mockAction);
    });
  });
});
