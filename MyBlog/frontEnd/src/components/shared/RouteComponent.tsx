import React from 'react'
import { Route } from 'react-router-dom';

import Home from './Home';
import Sample from '../sample';

import Board from '../board/index';
import BoardWriter from '../board/BoardWriter';
import BoardDetail from '../board/BoardDetail';

const RouteComponent = () => {
  return (
    <div id="wrapper">
      <Route exact={true} path="/" component={Home} />
      <Route path="/Sample" component={Sample} />

      <Route path="/Board/:pageIndex" component={Board} />
      <Route path="/BoardWriter/:id" component={BoardWriter} />
      <Route path="/BoardDetail/:pageIndex/:id" component={BoardDetail} />

    </div>
  )
}

export default RouteComponent;
