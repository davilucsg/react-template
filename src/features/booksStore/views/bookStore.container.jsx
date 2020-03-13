import React from 'react';
import BookStorePage from './bookStore.page';
import { connect } from 'react-redux';

const BookStoreContainer = props => {
  return <BookStorePage books={props.books} />;
};

const mapStateToProps = ({ bookStoreReducer }) => {
  return {
    books: bookStoreReducer.books
  };
};

export default connect(mapStateToProps)(BookStoreContainer);
