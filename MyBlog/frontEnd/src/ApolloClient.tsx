import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const link = new HttpLink({
  uri: 'http://localhost:8000/graphql'
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

export default client;