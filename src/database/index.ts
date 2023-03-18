import { Sequelize } from 'sequelize';
import dbConfig = require('./config.js');

const sequelize = new Sequelize(dbConfig);

try {
	sequelize.authenticate();
	console.log('Connection has been established successfully.');
} catch (error) {
	console.error('Unable to connect to the database:', error);
}