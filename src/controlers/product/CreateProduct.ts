import { Request, Response } from 'express';

import { database } from '../../database';

export class CreateProductController {
	async handle(req: Request, res: Response) {
		const { name, bar_code, price } = req.body;

		
		res.status(201).json();
	}
}