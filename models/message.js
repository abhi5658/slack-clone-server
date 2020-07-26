export default (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    text: DataTypes.STRING,
  }, {
    tableName: 'message',
  });

  Message.associate = (models) => {
    // 1:M
    Message.belongsTo(models.Channel, {
      foreignKey: 'channelId',
      // foreignKey: { // not required as field automatically converted to snake_case
      //   name: 'channelId',
      //   field: 'channel_id',
      // }
    });
    Message.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  };

  return Message;
};
