const _ = require('lodash');
const path = require('path');
const server = _.endsWith(process.cwd(), '/server') ? path.resolve(process.cwd()) : path.resolve(process.cwd(), 'server/');

module.exports = {
	env_file: path.resolve(server + '/.env'),
	knex_file: path.resolve(server + '/knexfile.js'),
	migration_directory: path.resolve(server + '/database/migrations'),
	seed_directory: path.resolve(server + '/database/seeds')
}