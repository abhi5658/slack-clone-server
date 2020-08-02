const RESOLVERS = {
  Query: {},
  Mutation: {
    createMessage: async (parent, args, { models, user }) => {
      try {
        await models.Message.create({ ...args, userId: user.id });
        return true;
      } catch (error) {
        console.log('message1', error);
        return false;
      }
    },
  },
};

export default RESOLVERS;
