import React, {Fragment } from 'react'
import { Route } from 'react-router-dom';

import Home from './Home';
import Sample from '../sample';

import Board from '../board';
import BoardWriter from '../board/BoardWriter';
import BoardDetail from '../board/BoardDetail';

const RouteComponent = () => {
  return (
    <div id="wrapper">
      <Route exact={true} path="/" component={Home} />
      <Route path="/Sample" component={Sample} />

      <Route path="/Board" component={Board} />
      <Route path="/BoardWriter" component={BoardWriter} />
      <Route path="/BoardDetail" component={BoardDetail} />

    </div>
  )
}

export default RouteComponent;
