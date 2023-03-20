import { Request, Response } from 'express';

import { database } from '../../database';

export class FindUserController {
	async handle(req: Request, res: Response) {
		const { id } = req.params;

		if(!id) {
			const users = await database.user.findMany({
				select: {
					email: true,
					id: true,
					created_at: true,
					userName: true,
				}
			});
			return res.status(200).json(users);
		}

		const user = await database.user.findUnique({
			where: {
				id: +id
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