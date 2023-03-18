const { Router } = require('express');

const UserControler = require('./controlers/UserControler');
const routes = Router();

routes.post('/users', UserControler.createUser);
routes.get('/users', UserControler.getAllUsers);

module.exports = routes;