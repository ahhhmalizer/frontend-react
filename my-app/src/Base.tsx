import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './Home';

class Base extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={true} path='/' component={Home}/>
      </Switch>
      
    );
  }
}

export default Base;
