const express = require('express');
const ongsController = require('./controllers/OngsController');
const incidentsController = require('./controllers/IncidentsController');
const profilecontroller = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/session', sessionController.create);

routes.get('/ongs', ongsController.index);
routes.post('/ongs', ongsController.Create);

routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);
routes.get('/profile', profilecontroller.index);

module.exports = routes;