const  { Router } =  require('express');

const UserControler = require('./controlers/UserControler');
const routes = Router();

routes.post('/users', UserControler.store);

module.exports = routes;