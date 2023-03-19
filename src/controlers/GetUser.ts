import { Request, Response } from 'express';

import { database } from '../database';

export class FindUserController {
	async handle(req: Request, res: Response) {
		const { id } = req.params;

		const user = await database.user.findUnique({
			where: {
				id: +id
			},
			select: {
				email: true,
				id: true,
				name: true,
				created_at: true
			}
		});
		

		if(!user) return res.status(404).json({ message: 'User not found' });

		res.status(200).json(user);
	}
}