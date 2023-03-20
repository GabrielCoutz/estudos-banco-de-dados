import { Request, Response } from 'express';

import { database } from '../../database';

export class UpdateProductController {
	async handle(req: Request, res: Response) {
		const { id } = req.params;
		const { name, price, category } = req.body;

		const product = await database.product.update({
			where: {
				id: +id
			},
			data: {
				name,
				price,
				category
			},
		});

		if(!product) return res.status(404).json({ message: 'Product not found' });

		res.status(200).json(product);

	}
}