import { deliveryApiKey, customer_id  } from './apiKeys';
import { addCompletedOrder } from '../actions';

export const creatDeliveryPost = (orderInfo) => {
  let orderObject = orderInfo;
  let deliveryBody = [];
  for (let property in orderObject) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(orderObject[property]);
    deliveryBody.push(encodedKey + "=" + encodedValue);
  }
  deliveryBody = deliveryBody.join("&");

  return async (dispatch) => {
    const url = `https://api.postmates.com/v1/customers/${customer_id}/deliveries`;
    const response = await fetch(url, {
      headers: {
        'Authorization': "Basic " + btoa(deliveryApiKey + ":"),
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      method: 'POST',
      body: deliveryBody
    });
    const order = await response.json();
    dispatch(addCompletedOrder(order));
  };
};
