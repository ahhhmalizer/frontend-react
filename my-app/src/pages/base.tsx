import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import './base.css';
import { Home } from './home';
import { PickAudience } from './pick-audience';
import { Result } from './result';
import { UploadVideo } from './upload-video';

class Base extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={true} path='/' component={Home}/>
        <Route path='/pick_audience' component={PickAudience}/>
        <Route path='/upload_video' component={UploadVideo}/>
        <Route path='/result' component={Result}/>
      </Switch>
      
    );
  }
}

export default Base;
