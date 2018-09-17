import * as actions from '../';
import * as mockData from '../../mockData';

describe('Action tests', () => {
  const {
    mockUser,
    mockUsers,
    mockItem,
    mockItems,
    mockQuoteData
  } = mockData;
  it('should return a object with type of ADD_USER, with the user info', () => {
    const expectation = { type: 'ADD_USER', user: mockUser };
    const result = actions.addUser(mockUser);
    expect(result).toEqual(expectation);
  });

  it('should return a object with type of GET_LOCAL_STORAGE_USERS, with the users array', () => {
    const expectation = { type: 'GET_LOCAL_STORAGE_USERS', users: mockUsers };
    const result = actions.getLocalStorageUsers(mockUsers);
    expect(result).toEqual(expectation);
  });

  it('should return a object with type of SET_ACTIVE_USER, with the user info', () => {
    const expectation = { type: 'SET_ACTIVE_USER', user: mockUser };
    const result = actions.setActiveUser(mockUser);
    expect(result).toEqual(expectation);
  });

  it('should return a object with type of LOGOUT_ACTIVE_USER', () => {
    const expectation = { type: 'LOGOUT_ACTIVE_USER'};
    const result = actions.logoutActiveUser();
    expect(result).toEqual(expectation);
  });

  it(`should return a object with type of GET_LOCAL_STORAGE_RENTALS, 
  with the rentals array`, () => {
    const expectation = { type: 'GET_LOCAL_STORAGE_RENTALS', rentals: mockItems };
    const result = actions.getLocalStorageRentals(mockItems);
    expect(result).toEqual(expectation);
  });

  it('should return a object with type of ADD_RENTAL, with the item to add', () => {
    const expectation = { type: 'ADD_RENTAL', item: mockItem };
    const result = actions.addRental(mockItem);
    expect(result).toEqual(expectation);
  });

  it('should return a object with type of REMOVE_RENTAL, with the item to remove', () => {
    const expectation = { type: 'REMOVE_RENTAL', item: mockItem };
    const result = actions.removeRental(mockItem);
    expect(result).toEqual(expectation);
  });

  it('should return a object with type of ADD_QUOTE, with the delivery quote', () => {
    const expectation = { type: 'ADD_QUOTE', deliveryQuote: mockQuoteData };
    const result = actions.addQuote(mockQuoteData);
    expect(result).toEqual(expectation);
  });
});
