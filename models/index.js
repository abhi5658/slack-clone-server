/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';

const basename = path.basename(__filename);

const sequelize = new Sequelize('slack', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    underscored: true,
  },
});

const models = {};

fs.readdirSync(__dirname)
  .filter((file) => file !== basename && file.slice(-3) === '.js')
  .forEach((file) => {
    const model = require(path.join(__dirname, file)).default(sequelize, Sequelize.DataTypes);
    models[model.name] = model;
  });

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
