export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
  }, {
    tableName: 'user',
  });

  User.associate = (models) => {
    User.belongsToMany(models.Team, {
      through: 'member',
      foreignKey: 'userId',
      // foreignKey: { // not required as field automatically converted to snake_case
      //   name: 'userId',
      //   field: 'user_id',
      // }
    });
    // n:m
    User.belongsToMany(models.Channel, {
      through: 'channel_member',
      foreignKey: 'userId',
    });
  };

  return User;
};
