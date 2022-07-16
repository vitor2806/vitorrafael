import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: import.meta.env.API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.API_ACCESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
});
