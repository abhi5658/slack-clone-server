// Imports: GraphQL
import { gql } from 'apollo-server-express';

const TYPEDEFS = gql`
  type User {
    id: Int!
    username: String!
    email: String!
    teams: [Team!]!
  }

  type Query {
    getUser(id: Int!): User!
    allUsers: [User!]!
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User!
  }
`;

// Exports
export default TYPEDEFS;
