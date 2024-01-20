import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://subgraph.satsuma-prod.com/09c9cf3574cc/orbital-apes/v3-subgraph/api',
  cache: new InMemoryCache(),
});
