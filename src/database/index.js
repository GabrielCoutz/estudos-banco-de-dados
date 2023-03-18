const { Sequelize } =  require('sequelize');

const User =  require('../model/User.js');
const dbConfig =  require('./config.js');

const sequelize = new Sequelize(dbConfig);

User.init(sequelize);