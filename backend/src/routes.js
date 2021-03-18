const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes =  express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;























// Rota / Recurso

/**Métodos HTTP:
    GET: Buscar uma informação no backend
    POST: criar uma informação no backend
    PUT: alterar informação no backend
    DELETE: Deletar informação no backend
*/
/**
 * Tipos de parametros
 * 
 * Query:parametros nomeados enviados na rota após o simbolo de "?" (filtros,paginação)
 * Route params: parametros utilizados para identificar rercursos
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */

/**
 *  Driver: select * FROM users
 *  Query Builder: table('users').select('*').where()
 * 
 */
