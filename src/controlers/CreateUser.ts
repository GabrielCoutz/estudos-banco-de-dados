import { Request, Response } from 'express';

import { database } from '../database';
import { hashPassword } from '../utils/hashPassword';

export class CreateUserController {
	async handle(req: Request, res: Response) {
		const { name, email, password } = req.body;
		const passwordHash = await hashPassword(password);
		let user;
		
		try {
			user = await database.user.create({
				data: {
					email,
					name,
					password: passwordHash,
				},
			});
			
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			console.log(error);
			
			if(error.code === 'P2002') return res.status(409).json({ message: 'Received an unique field already in use' });
			return res.status(500).json({ prismaError: error });
		}


		res.status(201).json(user);
	}
}