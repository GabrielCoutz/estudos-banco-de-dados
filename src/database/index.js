const { Sequelize } = require('sequelize');

const Address = require('../model/Address.js');
const User = require('../model/User.js');
const dbConfig = require('./config.js');
const sequelize = new Sequelize(dbConfig);


User.init(sequelize);
Address.init(sequelize);

Address.associate(sequelize.models);
User.associate(sequelize.models);