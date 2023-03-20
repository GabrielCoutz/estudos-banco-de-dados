import { Request, Response } from 'express';

import { database } from '../../database';

export class DeleteProductController {
	async handle(req: Request, res: Response) {
		const { id } = req.params;

		const product = await database.product.findUnique({
			where: {
				id: +id
			}
		});

		if(!product) return res.status(404).json({ message: 'Product not found' });

		await database.product.delete({
			where: {
				id: product.id
			}
		});

		res.status(204).json();
	}
}