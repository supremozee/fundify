import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.goldsky.com/api/public/project_cm3ehlxvonxe401vu7z005jl4/subgraphs/proposal-voting/1.0/gn',
  cache: new InMemoryCache(),
});

export default client;