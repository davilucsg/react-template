import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('Renderizou com sucesso', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
