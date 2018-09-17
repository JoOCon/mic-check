import { combineReducers } from 'redux';
import { userReducer } from '../reducers/userReducer';
import { activeUserReducer } from '../reducers/activeUserReducer';
import { rentalReducer } from '../reducers/rentalReducer';
import { quoteReducer } from '../reducers/quoteReducer';
import { selectedItemReducer } from '../reducers/selectedItemReducer';
import { completeOrdersReducer } from '../reducers/completeOrdersReducer';

export const rootReducer = combineReducers({
  users: userReducer,
  activeUser: activeUserReducer,
  rentals: rentalReducer,
  quote: quoteReducer,
  selectedItem: selectedItemReducer,
  completedOrders: completeOrdersReducer
});
