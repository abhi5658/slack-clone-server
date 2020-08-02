// Imports: GraphQL
// import { ApolloServer } from 'apollo-server-express';
import { ApolloServer } from 'apollo-server-express';
import path from 'path';
import { mergeTypeDefs, mergeResolvers, loadFilesSync } from 'graphql-tools';
// import models from './models';

// Imports: GraphQL TypeDefs & Resolvers
// import TYPEDEFS from './types';
// import RESOLVERS from './resolvers';

const typesArray = loadFilesSync(path.join(__dirname, './schemas'));
const TYPEDEFS = mergeTypeDefs(typesArray);
const resolversArray = loadFilesSync(path.join(__dirname, './resolvers'));
const RESOLVERS = mergeResolvers(resolversArray);

// GraphQL: Schema
const SERVER = new ApolloServer({
  typeDefs: TYPEDEFS,
  resolvers: RESOLVERS,
  // context: {
  //   models,
  // },
  playground: {
    // https://github.com/prisma-labs/graphql-playground#usage
    // endpoint: 'http://localhost:8080/graphql',
    endpoint: '/graphql',
    settings: {
      'editor.theme': 'light',
    },
  },
});

// Exports
export default SERVER;
