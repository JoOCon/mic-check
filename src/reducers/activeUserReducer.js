export const activeUserReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_USER':
      return action.user;
    default:
      return state;
  }
};
