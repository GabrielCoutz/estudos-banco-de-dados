import { Router } from 'express';

import { CreateUserController } from './controlers/CreateUser';
import { DeleteUserController } from './controlers/DeleteUser';
import { FindUserController } from './controlers/GetUser';
import { UpdateUserController } from './controlers/UpdateUser';


export const userRouter = Router();
const createUser = new CreateUserController();
const getUser = new FindUserController();
const updateUser = new UpdateUserController();
const deleteUser = new DeleteUserController();

userRouter.post('/', createUser.handle);
userRouter.get('/:id', getUser.handle);
userRouter.patch('/:id', updateUser.handle);
userRouter.delete('/:id', deleteUser.handle);