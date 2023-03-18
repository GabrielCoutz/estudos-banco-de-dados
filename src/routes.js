const { Router } = require('express');

const AddressControler = require('./controlers/AddressControler.js');
const UserControler = require('./controlers/UserControler');
const routes = Router();

routes.post('/users', UserControler.create);
routes.get('/users', UserControler.getAll);

routes.post('/users/:user_id/addresses', AddressControler.create);
routes.get('/users/:user_id/addresses', AddressControler.getUniqueAddress);

module.exports = routes;