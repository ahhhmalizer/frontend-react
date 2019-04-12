import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { LiveCard } from './cards/live-card';
import { TrainCard } from './cards/train-card';
import './index.css';

function _Home(props: RouteComponentProps) {
  return (
    <div className="App">
      
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        verticalAlign: 'center'
      }}>
        <TrainCard/>
        <LiveCard/>
      </div>
    </div>
  )
}

export const Home = withRouter(_Home);