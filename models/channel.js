export default (sequelize, DataTypes) => {
  // module.exports = (sequelize, DataTypes) => {
  const Channel = sequelize.define('Channel', {
    name: DataTypes.STRING,
    public: DataTypes.BOOLEAN,
  }, {
    tableName: 'channel',
  });

  Channel.associate = (models) => {
    // 1:M
    Channel.belongsTo(models.Team, {
      foreignKey: 'teamId',
      // foreignKey: { // not required as field automatically converted to snake_case
      //   name: 'teamId',
      //   field: 'team_id',
      // }
    });
    // n:m
    Channel.belongsToMany(models.User, {
      through: 'channel_member',
      foreignKey: 'channelId',
    });
  };

  return Channel;
};
