import React from 'react';
import ShoppingCartPage from './shoppingCart.page';
import { connect } from 'react-redux';
const shoppingContainer = props => {
  return <ShoppingCartPage compraEfetuada={props.compraEfetuada} />;
};
const mapStateToProps = ({ shoppingCart }) => {
  return {
    compraEfetuada: shoppingCart.compraEfetuada
  };
};

export default connect(mapStateToProps)(shoppingContainer);
