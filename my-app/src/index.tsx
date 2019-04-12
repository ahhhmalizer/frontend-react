import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Base from './pages/base';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Base />
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
