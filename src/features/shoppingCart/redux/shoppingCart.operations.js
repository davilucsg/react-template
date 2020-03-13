import * as shoppingCartActions from './shoppingCart.actions';
import ShoppingCartManager from '../shoppingCart.manager';

export const efetuarCompra = () => async dispatch => {
  const respostaAPI = await ShoppingCartManager.efetuarCompra()
  dispatch(shoppingCartActions.efetuarCompra(respostaAPI));
};
