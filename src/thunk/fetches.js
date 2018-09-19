import { deliveryApiKey, customer_id  } from './apiKeys';

export const fetchQuote = async (fromAddress, toAddress) => {
  let addresses = {
    pickup_address: fromAddress,
    dropoff_address: toAddress
  };

  let deliveryBody = [];
  for (let property in addresses) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(addresses[property]);
    deliveryBody.push(encodedKey + "=" + encodedValue);
  }
  deliveryBody = deliveryBody.join("&");

  const url = `https://api.postmates.com/v1/customers/${customer_id}/delivery_quotes`;
  const response = await fetch(url, {
    headers: {
      Authorization: "Basic " + btoa(deliveryApiKey + ":"),
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    method: 'POST',
    body: deliveryBody
  });
  const quote = await response.json();
  return quote;
};

export const fetchCompleteOrder = async (orderInfo) => {
  let orderObject = orderInfo;
  let deliveryBody = [];
  for (let property in orderObject) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(orderObject[property]);
    deliveryBody.push(encodedKey + "=" + encodedValue);
  }
  deliveryBody = deliveryBody.join("&");

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
  return order;
};