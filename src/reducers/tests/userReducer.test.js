import { userReducer } from '../userReducer';
import * as mockData from '../../mockData';
import * as actions from '../../actions';

describe('userReducer', () => {
  const {
    mockUser,
    mockUsers
  } = mockData;

  const {
    addUser,
    getLocalStorageUsers
  } = actions;

  beforeEach(() => {
    localStorage.clear();
  });
  
  it('should return the default state', () => {
    const expected = [];
    const result = userReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it(`should return state with an array of users and add it to local storage when 
  addUser is called`, () => {
    const expected = [mockUser];
    localStorage.setItem('AllUsers', JSON.stringify(mockUser));
    const result = userReducer(undefined, addUser(mockUser));
    expect(result).toEqual(expected);
  });

  it(`should return state with an array of users when getLocalStorageUsers 
  is called`, () => {
    const expected = [mockUser];
    const result = userReducer(undefined, getLocalStorageUsers([mockUser] || []));
    expect(result).toEqual(expected);
  });

  it(`should return default state when getLocalStorageUsers is called with
  nothing passed to it`, () => {
    const expected = [];
    const result = userReducer(undefined, getLocalStorageUsers(null));
    expect(result).toEqual(expected);
  });
});
