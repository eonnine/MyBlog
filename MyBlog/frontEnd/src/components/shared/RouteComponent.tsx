import React, {Fragment } from 'react'
import { Route } from 'react-router-dom';

import Home from './Home';
import Sample from '../sample';
import Board from '../Board';

const RouteComponent = () => {
  return (
    <div id="wrapper">
      <Route exact={true} path="/" component={Home} />
      <Route path="/Board" component={Board} />
      <Route path="/Sample" component={Sample} />
    </div>
  )
}

export default RouteComponent;
