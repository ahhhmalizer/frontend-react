import { Button } from '@material-ui/core';
import * as React from 'react';
import logo from './logo.svg';

export function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  )
}