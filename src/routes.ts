import { Request, Response, Router } from 'express';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
	return res.json({hello: 'world'});
});

export default routes;