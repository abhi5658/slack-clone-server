const RESOLVERS = {
  Query: {
    hi: (parent, args, context, info) => 'hi There yeah',
  },
};

export default RESOLVERS;
