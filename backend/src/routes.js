const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.post('/ongs', OngController.create);

routes.get('/ongs', OngController.index);

routes.post('/incidents', IncidentController.create);

routes.get('/incidents', IncidentController.index);

routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);


// routes.get('/ongs/:id', (request, response) => {
//   const params = request.query;
//   console.log(params);
//   return response.json({
//     evento: 'Semana OmniStack 11.0',
//     aluno: 'Lenio Ferretto'
//   });
// });

module.exports = routes;
