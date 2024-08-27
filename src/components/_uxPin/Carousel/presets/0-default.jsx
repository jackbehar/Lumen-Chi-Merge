import React from 'react';
import Carousel from '../Carousel';
import Card from '../../Card/Card';

export default (
  <Carousel uxpId="carousel-1">
    <Card empty uxpId="card-1" style={{ width: '50%' }}>
      Item-1
    </Card>
    <Card empty uxpId="card-2" style={{ width: '50%' }}>
      Item-2
    </Card>
    <Card empty uxpId="card-3" style={{ width: '50%' }}>
      Item-3
    </Card>
    <Card empty uxpId="card-4" style={{ width: '50%' }}>
      Item-4
    </Card>
  </Carousel>
);
