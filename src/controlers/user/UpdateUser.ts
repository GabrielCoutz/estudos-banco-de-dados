import { Request, Response } from 'express';

import { database } from '../../database';
import { hashPassword } from '../../utils/hashPassword';

export class UpdateUserController {
	async handle(req: Request, res: Response) {
		const { id } = req.params;
		const { password, firstName, lastName, userName } = req.body;
		const passwordHash = await hashPassword(password);

		const user = await database.user.update({
			where: {
				id: +id,
			},
			data: {
				firstName,
				userName,
				lastName,
				password: passwordHash
			},
			select: {
				email: true,
				id: true,
				userName: true,
				created_at: true
			}
		});

		if(!user) return res.status(404).json({ message: 'User not found' });

		res.status(200).json(user);
	}
}