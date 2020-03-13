import { EFETUAR_COMPRA } from './shoppingCart.actions';
const INITIAL_STATE = {
  compraEfetuada: false
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EFETUAR_COMPRA:
      console.log('action.payload :', action.payload);
      return { ...state, compraEfetuada: action.payload };

    default:
      return state;
  }
};
