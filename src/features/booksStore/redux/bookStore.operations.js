import * as bookStoreActions from './bookStore.actions';
import BookStoreManager from '../bookStore.manager';
import { notificationActions } from '../../notification/redux';

export const getBooks = () => async dispatch => {
  try {
    const books = await BookStoreManager.getBooks();
    dispatch(notificationActions.notificaSucesso('Sucesso..'));
    dispatch(bookStoreActions.setBooks(books));
  } catch (error) {
    dispatch(bookStoreActions.setBooks([]));
  }
};
