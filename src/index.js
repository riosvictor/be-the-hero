const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const configuration = require('../knexfile');

const app = express();


let connection;

switch (process.env.NODE_ENV){
  case 'production':
    connection = knex(configuration.production);
    break;
  default:
    connection = knex(configuration.development);
}

const appDb = connectToDb(connection)
Model.knex(appDb)


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);