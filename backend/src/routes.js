const express = require('express');
const routes = express.Router();
const crypto = require('crypto');
const connection = require('./database/connection');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);
routes.delete('/ongs/:id', OngController.delete);
routes.get('/profile', ProfileController.index);
routes.post('/sessions', SessionController.create);
module.exports = routes;