import React from 'react'
import { Route } from 'react-router-dom';

import Home from './Home';
import Sample from '../sample/Sample';

const RouteComponent = () => {
  return (
    <div id="wrapper">
      <Route exact={true} path="/" component={Home} />
      <Route path="/Sample" component={Sample} />
    </div>
  )
}

export default RouteComponent;
