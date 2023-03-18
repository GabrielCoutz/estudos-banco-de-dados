const Address = require('../model/Address');
const User = require('../model/User');

module.exports = {
	async create(req, res) {
		const { user_id } = req.params;
		const { zipcode, street, number } = req.body;
  
		const user = await User.findByPk(user_id);

		if(!user) return res.status(404).json({ message: 'User not found' });
  
		const address = await Address.create({
			zipcode, street, number, user_id
		});

		return res.json(address);
	},

	async getUniqueAddress(req, res) {
		const { user_id } = req.params;

		const user = await User.findByPk(user_id, {
			include: { association: 'addresses' }
		});
		if(!user) return res.status(404).json({ message: 'User not found' });

		return res.json(user);
	}


};