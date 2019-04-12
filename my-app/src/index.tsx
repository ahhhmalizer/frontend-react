import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { cyan, teal } from '@material-ui/core/colors';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Base from './pages/base';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: teal,
  },
})

ReactDOM.render(
  <HashRouter>
    <MuiThemeProvider theme={theme}>
      <Base />
    </MuiThemeProvider>
  </HashRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
