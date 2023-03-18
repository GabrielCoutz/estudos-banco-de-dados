'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable('adresses',{ 
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			zipcode: {
				type: Sequelize.STRING,
				allowNull: false
			},
			street: {
				type: Sequelize.STRING,
				allowNull: false
			},
			number: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			user_id:{
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { 
					model: 'users', key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			}
		});
	},

	async down (queryInterface, Sequelize) {
		/**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('adresses');
     */
	}
};
