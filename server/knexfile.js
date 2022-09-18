require("./loader");
const database = require("./config/database")();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: database,
  staging: database,
  production: database,
};
