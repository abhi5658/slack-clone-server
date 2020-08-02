// Imports: GraphQL
import { gql } from 'apollo-server-express';

const TYPEDEFS = gql`
  type Channel {
    id: Int!
    name: String!
    public: Boolean!
    messages: [Message!]!
    users: [User!]!
  }

  type Mutation {
    createChannel(teamId: Int!, name: String!, public: Boolean = false): Boolean!
  }
`;

// Exports
export default TYPEDEFS;
