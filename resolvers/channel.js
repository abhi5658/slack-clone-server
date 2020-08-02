const RESOLVERS = {
  Query: {},
  Mutation: {
    createChannel: async (parent, args, { models }) => {
      try {
        await models.Channel.create(args);
        return true;
      } catch (error) {
        console.log('channel1', error);
        return false;
      }
    },
  },
};

export default RESOLVERS;
