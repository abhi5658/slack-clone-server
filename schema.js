// Imports: GraphQL
// import { ApolloServer } from 'apollo-server-express';
import { ApolloServer } from 'apollo-server-express';

// Imports: GraphQL TypeDefs & Resolvers
import TYPEDEFS from './types';
import RESOLVERS from './resolvers';

// GraphQL: Schema
const SERVER = new ApolloServer({
  typeDefs: TYPEDEFS,
  resolvers: RESOLVERS,
  // https://github.com/prisma-labs/graphql-playground#usage
  playground: {
    // endpoint: 'http://localhost:8080/graphql',
    endpoint: '/graphql',
    settings: {
      'editor.theme': 'light',
    },
  },
});

// Exports
export default SERVER;
