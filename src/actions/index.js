export const addUser = (user) => ({
  type: 'ADD_USER',
  user
});

export const getLocalStorageUsers = (users) => ({
  type: 'GET_LOCAL_STORAGE_USERS',
  users
});

export const setActiveUser = (user) => ({
  type: 'SET_ACTIVE_USER',
  user
});

export const logoutActiveUser = () => ({
  type: 'LOGOUT_ACTIVE_USER'
});

export const getLocalStorageRentals = (rentals) => ({
  type: 'GET_LOCAL_STORAGE_RENTALS',
  rentals
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
