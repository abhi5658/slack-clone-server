export default (sequelize, DataTypes) => {
// module.exports = (sequelize, DataTypes) => {
  const Channel = sequelize.define('Channel', {
    name: DataTypes.STRING,
    public: DataTypes.BOOLEAN,
  },
  {
    tableName: 'channel',
  });

  Channel.associate = (models) => {
    // 1:M
    Channel.belongsTo(models.Team, {
      foreignKey: 'teamId',
    });
  };

  return Channel;
};
