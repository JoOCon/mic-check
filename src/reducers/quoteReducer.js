export const quoteReducer = (state={}, action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return action.deliveryQuote;
    default:
      return state;
  }
};