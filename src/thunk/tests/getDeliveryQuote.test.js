import { getDeliveryQuote } from '../getDeliveryQuote';
import { mockQuoteData, mockSenderLocation, mockDeliveryLocation } from '../../mockData';
import { addQuote } from '../../actions';

describe('getDeliveryQuote tests', () => {
  let mockDispatch;
  beforeEach(() => {
    mockDispatch = jest.fn();
  });
  
  it('should dispatch getDeliveryQuote with the correct param', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockQuoteData)
    }));
    const thunk =  getDeliveryQuote(mockSenderLocation, mockDeliveryLocation);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(addQuote(mockQuoteData));
  });
});
