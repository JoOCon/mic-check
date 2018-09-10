export const activeUserReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVE_USER':
      return action.user;
    default:
      return state;
  }
};
