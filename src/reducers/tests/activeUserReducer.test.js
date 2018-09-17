import { activeUserReducer } from '../activeUserReducer';
import * as mockData from '../../mockData';
import * as actions from '../../actions';

describe('activeUserReducer', () => {
  const {
    mockUser
  } = mockData;

  const {
    setActiveUser,
    logoutActiveUser
  } = actions;
  
  it('should return the default state', () => {
    const expected = {};
    const result = activeUserReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state with the current user when setActiveUser is called', () => {
    const expected = mockUser;
    const result = activeUserReducer(undefined, setActiveUser(mockUser));
    expect(result).toEqual(expected);
  });

  it('should return state with and empty object when logoutActiveUser is called', () => {
    const expected = {};
    const result = activeUserReducer(mockUser, logoutActiveUser(mockUser));
    expect(result).toEqual(expected);
  });
});
