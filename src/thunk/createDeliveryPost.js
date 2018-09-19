import { addCompletedOrder } from '../actions';
import { fetchCompleteOrder } from './fetches';

export const createDeliveryPost = (orderInfo) => {
  return async dispatch => {
    const order = await fetchCompleteOrder(orderInfo);
    dispatch(addCompletedOrder(order));
  };
};
