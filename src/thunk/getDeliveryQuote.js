import { deliveryApiKey, customer_id  } from './apiKeys';
import { addQuote } from '../actions';
import PropTypes from 'prop-types';

export const getDeliveryQuote = (fromAddress, toAddress) => {
  return async (dispatch) => {
    const url = `https://api.postmates.com/v1/customers/${customer_id}/delivery_quotes`;
    const response = await fetch(url, {
      headers: {
        [deliveryApiKey]:'',
        'Content-Type': 'application/json'
      },
      method: 'Post',
      body: JSON.stringify({
        pickup_address: '20 McAllister St, San Francisco, CA',
        dropoff_address: '101 Market St, San Francisco, CA'
      })
    });
    const quote = await response.json();
    console.log(quote);
    dispatch(addQuote(quote));
  };
};

getDeliveryQuote.propTypes = {
  fromAddress: PropTypes.string,
  toAddress: PropTypes.string
};

// var form = new FormData();
// form.append("pickup_address", "20 McAllister St, San Francisco, CA");
// form.append("dropoff_address", "101 Market St, San Francisco, CA");

// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://api.postmates.com/v1/customers/cus_LsvzF5CZMxpsDk/delivery_quotes",
//   "method": "POST",
//   "headers": {
//     "Authorization": "Basic OWE4MTk4Y2QtZGVlZi00ZGIyLTk1NDAtM2ExMGJjYWE1Mzg0Og==",
//     "Cache-Control": "no-cache",
//     "Postman-Token": "5e01eac6-0ce1-499c-8a03-ed4d7ebf6222"
//   },
//   "processData": false,
//   "contentType": false,
//   "mimeType": "multipart/form-data",
//   "data": form
// };

// $.ajax(settings).done(function (response) {
//   console.log(response);
// });