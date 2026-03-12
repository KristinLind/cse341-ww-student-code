const routes = require('express').Router();
const temples = require('../controllers/temple.js');

/**
 * #swagger.tags = ['Temples']
 * #swagger.summary = 'Get all temples'
 */
routes.get('/', temples.findAll);

routes.get('/', temples.findAll);
routes.get('/:temple_id', temples.findOne);

routes.post('/', temples.create);

module.exports = routes;