import { notificationActions } from '../redux';
import notificationReducer from '../redux/notification.reducers';
import { notificationErroMock, notificationSucessoMock, ocultanotificationMock } from './mock.ig';

describe('Teste notification Reducer', () => {
  const state = {
    mensagem: '',
    exibenotification: true,
    variant: 'success'
  };

  it('Estado inicial', () => {
    const newState = notificationReducer(undefined, {
      type: ''
    });
    expect(newState).toEqual({ ...state, exibenotification: false });
  });

  it('Action inexistente (default)', () => {
    const newState = notificationReducer(state, {
      type: ''
    });
    expect(newState).toEqual({ ...state, exibenotification: true });
  });

  it('NOTIFICA - SUCCESS', () => {
    const newState = notificationReducer(state, {
      type: notificationActions.NOTIFICA,
      payload: { ...notificationSucessoMock }
    });
    expect(newState).toEqual({ ...state, ...notificationSucessoMock });
  });

  it('NOTIFICA - ERROR', () => {
    const newState = notificationReducer(state, {
      type: notificationActions.NOTIFICA,
      payload: { ...notificationErroMock }
    });
    expect(newState).toEqual({ ...state, ...notificationErroMock });
  });

  it('OCULTA NOTIFICAÇÃO', () => {
    const state = {
      mensagem: 'Mensagem erro',
      exibenotification: false,
      variant: 'error'
    };
    const newState = notificationReducer(state, {
      type: notificationActions.OCULTA_notification,
      payload: { ...ocultanotificationMock }
    });
    expect(newState).toEqual({ ...state, ...ocultanotificationMock });
  });
});
