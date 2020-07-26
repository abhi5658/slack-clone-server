export default (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
  }, {
    tableName: 'team',
  });

  Team.associate = (models) => {
    Team.belongsToMany(models.User, {
      through: 'member',
      foreignKey: 'teamId',
      // foreignKey: { // not required as field automatically converted to snake_case
      //   name: 'teamId',
      //   field: 'team_id',
      // }
    });
    Team.belongsTo(models.User, {
      foreignKey: 'owner', // same in snake_case
    });
  };

  return Team;
};
