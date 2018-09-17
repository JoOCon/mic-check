import { selectedItemReducer } from '../selectedItemReducer';
import * as mockData from '../../mockData';
import * as actions from '../../actions';

describe('selectedItemReducer', () => {
  const {
    mockItem
  } = mockData;

  const {
    selectedItem
  } = actions;

  it('should return the default state', () => {
    const expected = {};
    const result = selectedItemReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state with an object when selectedItem is called', () => {
    const expected = mockItem;
    const result = selectedItemReducer(undefined, selectedItem(mockItem));
    expect(result).toEqual(expected);
  });
});
