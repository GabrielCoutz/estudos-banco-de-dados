const bcrypt = require('bcrypt');

const User = require('../model/User');

module.exports = {
	async createUser (req , res){
		const { name, email, password } = req.body;
		const passwordHash = await bcrypt.hash(password, 12);
  
		const user = await User.create({name, email, password: passwordHash});
  
		return res.json(user);
	},

	async getAllUsers(req,res) {
		const users = await User.findAll();

		return res.json(users);
	}
};