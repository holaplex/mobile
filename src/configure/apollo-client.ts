import {API_URL} from 'react-native-dotenv';
import {ApolloClient, InMemoryCache} from '@apollo/client';

// Initialize Apollo Client

export const apolloClient = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});
