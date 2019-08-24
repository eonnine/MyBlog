import React, { Fragment } from 'react';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import client from './ApolloClient';
import Sidebar from './components/shared/Sidebar';
import RouteComponent from './components/shared/RouteComponent';

const App = () => {
  return (
    <ApolloHooksProvider client={client}>
      <Fragment>
        <Router>
            <Sidebar />
            <RouteComponent />
        </Router>
      </Fragment>
    </ApolloHooksProvider>
  )
}

export default App;