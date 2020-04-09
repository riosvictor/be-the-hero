const knex = require('knex');
const configuration = require('../../knexfile');

let connection = knex(configuration.development);


let dbConnectionConfig;

switch (process.env.NODE_ENV){
  case 'production':
    connection = knex(configuration.production);
    break;
  default:
    connection = knex(configuration.development);
}

//const appDb = connectToDb(connection)
//Model.knex(appDb)

module.exports = connection;