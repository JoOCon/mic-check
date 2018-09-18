import { completeOrdersReducer } from '../completeOrdersReducer';
import * as mockData from '../../mockData';
import * as actions from '../../actions';

describe('completeOrdersReducer', () => {
  const {
    mockOrderInfo
  } = mockData;

  const {
    addCompletedOrder,
    getLocalStorageOrders
  } = actions;

  beforeEach(() => {
    localStorage.clear();
  });
  
  it('should return the default state', () => {
    const expected = [];
    const result = completeOrdersReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it(`should return state with a completed order and add it to local storage when 
  addCompletedOrder is called`, () => {
    const expected = [mockOrderInfo];
    localStorage.setItem('AllCompletedOrders', JSON.stringify(mockOrderInfo));
    const result = completeOrdersReducer(undefined, addCompletedOrder(mockOrderInfo));
    expect(result).toEqual(expected);
  });

  it(`should return state with an array of completed orders when getLocalStorageOrders 
  is called`, () => {
    const expected = [mockOrderInfo];
    const result = completeOrdersReducer(undefined, getLocalStorageOrders([mockOrderInfo]));
    expect(result).toEqual(expected);
  });

  it(`should return default state when getLocalStorageOrders is called with 
  nothing passed to it`, () => {
    const expected = [];
    const result = completeOrdersReducer(undefined, getLocalStorageOrders(null));
    expect(result).toEqual(expected);
  });
});
