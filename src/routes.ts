import { Request, Response, Router } from 'express';

const routes = Router();

routes.get('/user', (req: Request, res: Response) => {
	res.json({ teste: 'xampson' });
});

export default routes;