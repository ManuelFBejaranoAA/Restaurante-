const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Roles = require('./rol')(sequelize, DataTypes);
db.User = require('./user')(sequelize, DataTypes);
db.Admin = require('./admin')(sequelize, DataTypes);
module.exports = db;
