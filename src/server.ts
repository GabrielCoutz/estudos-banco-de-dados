import express from 'express';

import { userRouter } from './routes';

const app = express();

app.use(express.json());

app.use('/user', userRouter);

const port = 3333;

app.listen(port, () => console.log(`Rodando na porta => ${port}`));