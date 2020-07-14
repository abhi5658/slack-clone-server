const RESOLVERS = {
  Query: {
    hi: (parent, args, context, info) => 'hi There',
  },
};

export default RESOLVERS;
