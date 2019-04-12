import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import './base.css';
import { Home } from './home';
import { Other } from './other';

class Base extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={true} path='/' component={Home}/>
        <Route path='/other' component={Other}/>
      </Switch>
      
    );
  }
}

export default Base;
