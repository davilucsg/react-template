import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import { shallow,configure } from 'enzyme';
import { NotificationContainer } from '../views/notification.container';
import  Notification  from '../views/notification';
configure({ adapter: new Adapter() });

describe('Testa <notificationContainer />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<NotificationContainer reduxProps={{}}/>);
  });
  it('Deve renderizar <notificationContainer /> ', () => {
    expect(component).toMatchSnapshot();
  });
  it('Deve renderizar <notification /> ', () => {
    expect(component.find(Notification).exists()).toEqual(true);
  });

  it('Deve setar props exibenotification para true e state exibenotification deve ser true ', () => {
    component.setProps({
      reduxProps: { exibenotification: true }
    });
    expect(component.state().exibenotification).toEqual(true);
  });

  it('Deve setar props exibenotification para false e state exibenotification deve ser false ', () => {
    component.setProps({
      reduxProps: { exibenotification: false }
    });
    expect(component.state().exibenotification).toEqual(false);
  });
});
