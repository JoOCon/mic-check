import { fetchQuote } from './fetches';
import { addQuote } from '../actions';

export const getDeliveryQuote = (fromAddress, toAddress) => {
  return async dispatch => {
    const quote = await fetchQuote(fromAddress, toAddress);
    dispatch(addQuote(quote));
  };
};
