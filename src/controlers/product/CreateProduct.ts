import { Request, Response } from 'express';

import { database } from '../../database';

export class CreateProductController {
	async handle(req: Request, res: Response) {
		const { name, bar_code, price, user_id, category } = req.body;

		const product = await database.product.create({
			data: {
				bar_code,
				name,
				price,
				category: {
					connectOrCreate: {
						where: {
							name: category
						},
						create: {
							name: category
						}
					}
				},
				owner: {
					connect: {
						id: +user_id
					}
				}
			},
		});

		res.status(201).json(product);
	}
}