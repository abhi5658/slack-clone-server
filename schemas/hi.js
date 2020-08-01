// Imports: GraphQL
import { gql } from 'apollo-server-express';

const TYPEDEFS = gql`

  type Query {
    hi: String
  }
`;

// Exports
export default TYPEDEFS;
