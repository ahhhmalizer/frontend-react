import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Base from './pages/base';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <HashRouter>
    <Base />
  </HashRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
