const bcrypt = require('bcrypt');

const User = require('../model/User');

module.exports = {
	async create (req, res) {
		const { name, email, password } = req.body;
		const passwordHash = await bcrypt.hash(password, 12);
  
		const user = await User.create({ name, email, password: passwordHash });
  
		return res.json(user);
	},

	async getAll(req, res) {
		const users = await User.findAll();

		return res.json(users);
	}
};