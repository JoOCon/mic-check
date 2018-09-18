export const mockUser = {
  userName: 'Tom Hanks',
  password: 'password',
  email: 'THanks@hanks.com',
  location: '20 McAllister St, San Francisco, CA'
};

export const mockUsers = [{
  userName: 'Tom Hanks',
  password: 'password',
  email: 'THanks@hanks.com',
  location: '20 McAllister St, San Francisco, CA'
},
{
  userName: 'Jim Hanks',
  password: 'password',
  email: 'JHanks@hanks.com',
  location: '20 McAllister St, San Francisco, CA'
}];

export const mockItem = {
  name: 'Guitar',
  location: '101 Market St, San Francisco, CA',
  description: 'Its a guitar!',
  image: "https://guitar-image.png",
  rentalPrice: 50,
  id: 1
};

export const mockItem2 = {
  name: 'Amp',
  location: '101 Market St, San Francisco, CA',
  description: 'Its a amp!',
  image: "https://amp-image.png",
  rentalPrice: 50,
  id: 2
};

export const mockItems = [{
  name: 'Guitar',
  location: '101 Market St, San Francisco, CA',
  description: 'Its a guitar!',
  image: "https://guitar-image.png",
  rentalPrice: 50,
  id: 1
}, 
{
  name: 'Amp',
  location: '101 Market St, San Francisco, CA',
  description: 'Its a amp!',
  image: "https://amp-image.png",
  rentalPrice: 50,
  id: 2
}];

export const mockSenderLocation = '101 Market St, San Francisco, CA';
export const mockDeliveryLocation = '20 McAllister St, San Francisco, CA';

export const mockQuoteData = {
  kind: "delivery_quote",
  fee: 1140,
  created: "2018-09-13T00:40:02Z",
  pickup_duration: 5,
  expires: "2018-09-13T00:45:01Z",
  currency: "usd",
  currency_type: "USD",
  duration: 45,
  dropoff_eta: "2018-09-13T01:25:02Z",
  id: "dqt_Ltalsge5ktl1YV"
};

export const mockOrderInfo = {
  manifest: 'a box of shoes',
  'manifest_items[].name': 'Nikes',
  'manifest_items[].size': '2',
  pickup_address: '101 Market St, San Francisco, CA',
  pickup_name: 'Allen',
  pickup_phone_number: 3033334444,
  dropoff_address: '20 McAllister St, San Francisco, CA',
  dropoff_name: 'Tim',
  dropoff_phone_number: 2223334444,
  dropoff_notes: 'Tim@timmmy.com'
};

export const mockOrderConfirmation = {
  undeliverable_action: null,
  currency: "usd",
  dropoff_identifier: "",
  manifest: {
    description: 'a box of shoes'
  },
  id: "del_Lu-c_oyiH69mDF",
  dropoff: {
    phone_number: 3033334444,
    name: 'Allen',
    notes: 'Tim@timmmy.com'
  },
  fee: 571,
  quote_id: "dqt_Lu-c_vlL5PdvEF",
  pickup_deadline: "2018-09-17T22:40:07Z",
  tip: null,
  pickup: {
    phone_number: 2223334444,
    name: 'Tim',
    notes: ''
  },
  live_mode: false,
  related_deliveries: [],
  status: "pending",
  updated: "2018-09-17T22:20:07Z",
  complete: false,
  courier: null,
  undeliverable_reason: null,
  courier_imminent: false,
  dropoff_deadline: "2018-09-17T22:50:07Z",
  dropoff_eta: null,
  tracking_url: "https://postmates.com/track/del_Lu-c_oyiH69mDF",
  kind: "delivery",
  created: "2018-09-17T22:20:07Z",
  pickup_ready: "2018-09-17T22:30:07Z",
  dropoff_ready: "2018-09-17T22:30:07Z",
  pickup_eta: null
};