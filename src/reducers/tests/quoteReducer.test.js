import { quoteReducer } from '../quoteReducer';
import * as mockData from '../../mockData';
import * as actions from '../../actions';

describe('quoteReducer', () => {
  const {
    mockQuoteData
  } = mockData;

  const {
    addQuote
  } = actions;

  it('should return the default state', () => {
    const expected = {};
    const result = quoteReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return state with an object when addQuote is called', () => {
    const expected = mockQuoteData;
    const result = quoteReducer(undefined, addQuote(mockQuoteData));
    expect(result).toEqual(expected);
  });
});
