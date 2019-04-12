import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { AbstractCard } from './abstract-card';

export function _TrainCard(props: RouteComponentProps) {
  return (
    <AbstractCard
      src="https://images.pexels.com/photos/1468310/pexels-photo-1468310.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      title="Üben"
      description="Lorem Ipsum Dolor"
      onClick={() => props.history.push('/pick_audience')}
    />
  )
}

export const TrainCard = withRouter(_TrainCard);
