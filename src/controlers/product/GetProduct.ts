import { Request, Response } from 'express';

import { database } from '../../database';

export class GetProductController {
	async handle(req: Request, res: Response) {
		const { id } = req.params;

		if(!id) {
			const products = await database.product.findMany({
				include: {
					owner: {
						select: {
							id: true,
							email: true,
						},
					},
					category: {
						select: {
							id: true,
							name: true
						}
					}
				}
			});
			return res.status(200).json(products);
		}

		const product = await database.product.findUnique({
			where: {
				id: +id
			},
			include: {
				owner: {
					select: {
						id: true,
						email: true,
					}
				},
				category: {
					select: {
						id: true,
						name: true
					}
				}
			}
		});

		if(!product) return res.status(404).json({ message: 'Product not found' });

		res.status(200).json(product);
	}
}