export const NOTIFICA = 'notification/NOTIFICA';
export const OCULTA_notification = 'notification/OCULTA_notification';

const notificaErro = (mensagem) => {
  return {
    type: NOTIFICA,
    payload: { mensagem, variant: 'error' }
  };
};

const notificaSucesso = (mensagem) => {
  return {
    type: NOTIFICA,
    payload: { mensagem, variant: 'success' }
  };
};

const ocultanotification = () => {
  return {
    type: OCULTA_notification
  };
};
export { notificaErro, ocultanotification, notificaSucesso };
