import { combineReducers } from 'redux';
import { bookStoreReducer } from '../features/booksStore/redux/';
import { shoppingCartReducer } from '../features/shoppingCart/redux/';
import { notificationReducers } from '../features/notification/redux';

const reducer = combineReducers({
  bookStoreReducer,
  shoppingCart: shoppingCartReducer,
  notification: notificationReducers
});

export default reducer;
