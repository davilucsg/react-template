import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { notification as Notificacao } from '../views/notification';
configure({ adapter: new Adapter() });

describe('Testa <notification />', () => {
  let component;
  beforeEach(() => {
    component = mount(
      <Notificacao
        classes={{}}
        className=""
        mensagem=""
        variant="success"
        exibenotification={true}
      />
    );
  });

  it('Deve renderizar <notification /> com Snackbar com SnackbarContent', () => {
    expect(component).toMatchSnapshot();
    expect(component.find(Snackbar).exists()).toEqual(true);
    expect(component.find(SnackbarContent).exists()).toEqual(true);
  });

  it('Deve ocultar <notification />', () => {
    component.setProps({
      exibenotification: false
    });
    expect(component.find(Snackbar).props()).toHaveProperty('open', false);
  });

  it('A mensagem da notificação deve ser "Mensagem teste"', () => {
    component.setProps({
      mensagem: 'Mensagem teste'
    });
    expect(component.find(SnackbarContent).props()).toHaveProperty(
      'message',
      'Mensagem teste'
    );
  });

  it('Deve chamar função que oculta notificação', () => {
    let ocultanotificationMock = jest.fn();
    component.setProps({
      ocultanotification: ocultanotificationMock
    });
    const icontOcultarnotification = component.filterWhere(
      elemento => (elemento.id = '#iconOcultarnotification')
    );
    icontOcultarnotification.simulate('click');
    expect(icontOcultarnotification.exists()).toEqual(true);
  });
});
