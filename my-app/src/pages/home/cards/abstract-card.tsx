import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import * as React from 'react';

export interface IAbstractCardProps {
  title: string,
  description: string,
  src: string
  onClick: () => void
}

export function AbstractCard(props: IAbstractCardProps) {
  return (
    <Card style={{
      maxWidth: 515
    }}>
      <CardActionArea
        onClick={props.onClick}
      >
        <CardMedia
          style={{
            height: 240,
            objectFit: 'cover'
            
          }}
          component="img"
          image={props.src}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom={true} variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}