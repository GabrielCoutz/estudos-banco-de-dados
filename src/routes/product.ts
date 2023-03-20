import { Router } from 'express';

import { CreateProductController } from '../controlers/product/CreateProduct';
import { GetProductController } from '../controlers/product/GetProduct';

export const productRouter = Router();

const createProduct = new CreateProductController();
const getProduct = new GetProductController();

productRouter.post('/', createProduct.handle);
productRouter.get(['/', '/:id'], getProduct.handle);