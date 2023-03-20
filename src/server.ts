import express from 'express';

import { productRouter } from './routes/product';
import { userRouter } from './routes/user';

const app = express();

app.use(express.json());

app.use('/user', userRouter);
app.use('/product', productRouter);

const port = 3333;

app.listen(port, () => console.log(`Rodando na porta => ${port}`));