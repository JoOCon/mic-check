export const rentalReducer = (state = [], action) => {
  let addedNewRental;
  let stringedRental;
  let remainingRentals;
  switch (action.type) {
    case 'ADD_RENTAL':
      addedNewRental = [action.item, ...state];
      stringedRental = JSON.stringify(addedNewRental);
      localStorage.setItem('AllRentals', stringedRental);
      return addedNewRental;
    case 'GET_LOCAL_STORAGE_RENTALS':
      return action.rentals || state;
    case 'REMOVE_RENTAL':
      remainingRentals = state.filter(rental => action.item.id !== rental.id);
      stringedRental = JSON.stringify(remainingRentals);
      localStorage.setItem('AllRentals', stringedRental);
      return remainingRentals;
    default:
      return state;
  }
};
