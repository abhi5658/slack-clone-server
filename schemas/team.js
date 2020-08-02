// Imports: GraphQL
import { gql } from 'apollo-server-express';

const TYPEDEFS = gql`
  type Team {
    owner: User!
    members: [User!]!
    channels: [Channel!]!
  }

  type Mutation {
    createTeam(name: String!): Boolean!
  }
`;

// Exports
export default TYPEDEFS;
