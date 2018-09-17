import { deliveryApiKey, customer_id  } from './apiKeys';
import { addQuote } from '../actions';

export const postCreatDelivery = (fromAddress, toAddress) => {
  let addresses = {
    pickup_address: fromAddress,
    dropoff_address: toAddress
  };

  var deliveryBody = [];
  for (var property in addresses) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(addresses[property]);
    deliveryBody.push(encodedKey + "=" + encodedValue);
  }
  deliveryBody = deliveryBody.join("&");

  return async (dispatch) => {
    const url = `https://api.postmates.com/v1/customers/${customer_id}/delivery_quotes`;
    const response = await fetch(url, {
      headers: {
        'Authorization': "Basic " + btoa(deliveryApiKey + ":" + ""),
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      method: 'POST',
      body: deliveryBody
    });
    const quote = await response.json();
    dispatch(addQuote(quote));
  };
};
