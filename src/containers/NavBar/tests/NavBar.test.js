import React from 'react';
import { shallow } from 'enzyme';
import { NavBar, mapStateToProps, mapDispatchToProps } from '../';
import * as mockData from '../../../mockData';
import * as actions from '../../../actions';

describe('NavBar tests', () => {
  let wrapper;
  let mockRunFunction;
  const { mockUser } = mockData;
  const { logoutActiveUser } = actions;
  beforeEach(() => {
    mockRunFunction = jest.fn();
    wrapper = shallow( 
      <NavBar 
        activeUser={mockUser}
        logoutActiveUser={mockRunFunction}
      /> 
    );
  });

  it('renders the NavBar with the correct props', () => {
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

    it('should dispatch logoutActiveUser when called', () => {
      const mockAction = logoutActiveUser(mockUser);
      const props = mapDispatchToProps(mockDispatch);
      props.logoutActiveUser(mockUser);
      expect(mockDispatch).toBeCalledWith(mockAction);
    });
  });
});
