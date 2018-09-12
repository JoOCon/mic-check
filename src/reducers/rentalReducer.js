export const rentalReducer = (state = [], action) => {
  let addedNewRental;
  let stringedRental;
  switch (action.type) {
    case 'ADD_RENTAL':
      addedNewRental = [action.item, ...state];
      stringedRental = JSON.stringify(addedNewRental);
      localStorage.setItem('AllRentals', stringedRental);
      return addedNewRental;
    case 'GET_LOCAL_STORAGE_RENTALS':
      return action.rentals || state;
    case 'REMOVE_RENTAL':
      return [];
    default:
      return state;
  }
};
