import {
  NOTIFICA,
  OCULTA_notification
} from './notification.actions';
const INITIAL_STATE = {
  mensagem: '',
  exibenotification: false,
  variant: 'success'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOTIFICA:
      return {
        ...state,
        mensagem: action.payload.mensagem,
        exibenotification: true,
        variant: action.payload.variant
      };
    case OCULTA_notification:
      return { ...state, mensagem: '', exibenotification: false };

    default:
      return state;
  }
};
