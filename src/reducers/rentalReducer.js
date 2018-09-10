export const rentalReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RENTAL':
      return [action.item, ...state];
    case 'REMOVE_RENTAL':
      return [];
    default:
      return state;
  }
};
