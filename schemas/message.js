// Imports: GraphQL
import { gql } from 'apollo-server-express';

const TYPEDEFS = gql`
  type Message {
    id: Int!
    text: String!
    user: User!
    channel: Channel!
  }

  type Mutation {
    createMessage(channelId: Int!, text: String!): Boolean!
  }
`;

// Exports
export default TYPEDEFS;
