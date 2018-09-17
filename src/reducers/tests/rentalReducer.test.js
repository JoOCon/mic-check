import { rentalReducer } from '../rentalReducer';
import * as mockData from '../../mockData';
import * as actions from '../../actions';

describe('rentalReducer', () => {
  const {
    mockItem,
    mockItem2,
    mockItems
  } = mockData;

  const {
    addRental,
    removeRental,
    getLocalStorageRentals
  } = actions;

  beforeEach(() => {
    localStorage.clear();
  });
  
  it('should return the default state', () => {
    const expected = [];
    const result = rentalReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it(`should return state with an array of items and add it to local storage when 
  addRental is called`, () => {
    const expected = [mockItem];
    localStorage.setItem('AllRentals', JSON.stringify(mockItem));
    const result = rentalReducer(undefined, addRental(mockItem));
    expect(result).toEqual(expected);
  });

  it(`should return state with an array of rental items when getLocalStorageRentals 
  is called`, () => {
    const expected = mockItems;
    const result = rentalReducer(undefined, getLocalStorageRentals(mockItems));
    expect(result).toEqual(expected);
  });

  it(`should return state with an array of rental items without the once passed 
  to removeRental and update local storage`, () => {
    const expected = [mockItem2];
    localStorage.setItem('AllRentals', JSON.stringify(mockItems));
    const result = rentalReducer(mockItems, removeRental(mockItem));
    expect(result).toEqual(expected);
  });

  it(`should return default state when getLocalStorageRentals is called with
  nothing passed to it`, () => {
    const expected = [];
    const result = rentalReducer(undefined, getLocalStorageRentals(null));
    expect(result).toEqual(expected);
  });
});
