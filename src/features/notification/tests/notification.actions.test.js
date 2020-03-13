import { notificationActions } from '../redux/';
import { notificationErroMock, notificationSucessoMock } from './mock.ig';

describe('Teste notificationActions', () => {
  it('notificaErro chamada de operations', () => {
    expect(notificationActions.notificaErro(notificationErroMock.mensagem)).toEqual({
      type: notificationActions.NOTIFICA,
      payload: notificationErroMock
    });
  });
  it('notificaSucesso chamada de operations', () => {
    expect(notificationActions.notificaSucesso(notificationSucessoMock.mensagem)).toEqual({
      type: notificationActions.NOTIFICA,
      payload: notificationSucessoMock
    });
  });

  it('ocultanotification', () => {
    expect(notificationActions.ocultanotification()).toEqual({
      type: notificationActions.OCULTA_notification
    });
  });
});
