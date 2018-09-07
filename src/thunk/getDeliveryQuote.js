import { apiKeys, customer_id  } from '../api/apiKey';
import { addQuote } from '../actions';

export const getDeliveryQuote = () => {
  return async (dispatch) => {
    const url = `https://api.postmates.com/${customer_id}/delivery_quotes`;
    const response = await fetch(url);
    const data = await response.json();
    const quote = {};
    dispatch(addQuote(quote));
  };
};
