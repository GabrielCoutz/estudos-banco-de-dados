import { Router } from 'express';

import { CreateUserController } from '../controlers/CreateUserControler';

export const userRouter = Router();
const createUser = new CreateUserController();

userRouter.post('/', createUser.handle);