import { Button } from '@material-ui/core';
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import logo from '../../logo.svg';
import './index.css';

function _Home(props: RouteComponentProps) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Button variant="contained" color="primary" onClick={() => props.history.push('/pick_audience')}>
        Hello World
      </Button>
    </div>
  )
}

export const Home = withRouter(_Home);