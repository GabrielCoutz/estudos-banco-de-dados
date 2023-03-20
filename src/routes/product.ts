import { Router } from 'express';

import { CreateProductController } from '../controlers/product/CreateProduct';
import { GetProductController } from '../controlers/product/GetProduct';
import { UpdateProductController } from '../controlers/product/UpdateProduct';

export const productRouter = Router();

const createProduct = new CreateProductController();
const getProduct = new GetProductController();
const updateProduct = new UpdateProductController();

productRouter.post('/', createProduct.handle);
productRouter.get(['/', '/:id'], getProduct.handle);
productRouter.patch('/:id', updateProduct.handle);