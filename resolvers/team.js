const RESOLVERS = {
  Query: {},
  Mutation: {
    createTeam: async (parent, args, { models, user }) => {
      try {
        await models.Team.create({ ...args, owner: user.id });
        return true;
      } catch (error) {
        console.log('team1', error);
        return false;
      }
    },
  },
};

export default RESOLVERS;
