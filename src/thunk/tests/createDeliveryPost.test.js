import { createDeliveryPost } from '../createDeliveryPost';
import { mockOrderInfo, mockOrderConfirmation } from '../../mockData';
import { addCompletedOrder } from '../../actions';

describe('createDeliveryPost tests', () => {
  let mockDispatch;
  beforeEach(() => {
    mockDispatch = jest.fn();
  });
  
  it('should dispatch createDeliveryPost with the correct param', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockOrderConfirmation)
    }));
    const thunk = createDeliveryPost(mockOrderInfo);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(addCompletedOrder(mockOrderConfirmation));
  });
});
