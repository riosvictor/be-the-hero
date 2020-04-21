const knex = require("knex");
const configuration = require("../../knexfile");

let connection;

if (process.env.NODE_ENV === "test") connection = knex(configuration.test);
else if (process.env.NODE_ENV === "production")
  connection = knex(configuration.production);
else connection = knex(configuration.development);

module.exports = connection;
