const knex = require('knex');
const configuration = require('../../knexfile');

let connection;

switch (process.env.NODE_ENV){
  case 'production':
    connection = knex(configuration.production);
    break;
  default:
    connection = knex(configuration.development);
}

module.exports = connection;