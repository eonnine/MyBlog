import React, { Fragment } from 'react'
import { Route } from 'react-router-dom';

import Home from './Home';
import Sample from '../sample/Sample';

const RouteComponent = () => {
  return (
    <Fragment>
      <div id="wrapper">
        <Route exact={true} path="/" component={Home} />
        <Route path="/Sample" component={Sample} />
      </div>
    </Fragment>
  )
}

export default RouteComponent;
