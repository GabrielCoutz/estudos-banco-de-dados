import { Request, Response } from 'express';

import { database } from '../../database';

export class DeleteUserController {
	async handle(req: Request, res: Response) {
		const { id } = req.params;

		const user = await database.user.findUnique({
			where: {
				id: +id
			}
		});

		if(!user) return res.status(404).json({ message: 'User not found' });

		await database.user.delete({
			where: {
				id: user.id
			}
		});

		res.status(204).json();
	}
}