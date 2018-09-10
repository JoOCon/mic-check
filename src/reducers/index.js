import { combineReducers } from 'redux';
import { userReducer } from '../reducers/userReducer';
import { activeUserReducer } from '../reducers/activeUserReducer';
import { rentalReducer } from '../reducers/rentalReducer';
import { quoteReducer } from '../reducers/quoteReducer';

export const rootReducer = combineReducers({
  users: userReducer,
  activeUser: activeUserReducer,
  rentals: rentalReducer,
  quote: quoteReducer
});
