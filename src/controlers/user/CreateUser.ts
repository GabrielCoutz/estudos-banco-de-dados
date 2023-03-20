import { Request, Response } from 'express';

import { database } from '../../database';
import { hashPassword } from '../../utils/hashPassword';

export class CreateUserController {
	async handle(req: Request, res: Response) {
		const { userName, email, password } = req.body;

		const emailAlreadyTaken = await database.user.count({
			where: {
				email
			}
		});

		if(emailAlreadyTaken) return res.status(409).json({ message: 'This email already been taken' });

		const passwordHash = await hashPassword(password);
		const user = await database.user.create({
			data: {
				email,
				userName,
				password: passwordHash,
			},
			select: {
				email: true,
				id: true,
				userName: true,
				created_at: true
			}
		});

		res.status(201).json(user);
	}
}