import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { AbstractCard } from './abstract-card';

export function _LiveCard(props: RouteComponentProps) {
  return (
    <AbstractCard
      src="https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?cs=srgb&dl=class-classroom-conference-716276.jpg&fm=jpg"
      title="Live Analyse"
      description="Lorem Ipsum Dolor"
      onClick={() => props.history.push('/pick_audience')}
    />
  )
}

export const LiveCard = withRouter(_LiveCard);
