export const addUser = (user) => ({
  type: 'ADD_USER',
  user
});

export const getLocalStorageUsers = (users) => ({
  type: 'GET_LOCAL_STORAGE_USERS',
  users
});

export const activeUser = (user) => ({
  type: 'ACTIVE_USER',
  user
});

export const addRental = (item) => ({
  type: 'ADD_RENTAL',
  item
});

export const removeRental = (item) => ({
  type: 'REMOVE_RENTAL',
  item
});

export const addQuote = (deliveryQuote) => ({
  type: 'ADD_QUOTE',
  deliveryQuote
});
