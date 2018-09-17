export const selectedItemReducer = (state={}, action) => {
  switch (action.type) {
    case 'SELECTED_ITEM':
      return action.item;
    default:
      return state;
  }
};