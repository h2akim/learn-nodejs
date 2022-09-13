module.exports = function () {
	const connections = {
		default: process.env.DB_CLIENT || 'mysql',
		mysql: {
			host: process.env.DB_HOST,
			user: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_DATABASE,
			charset: process.env.DB_CHARSET || 'utf8',
		},
		sqlite: {
			filename: process.env.DB_DATABASE || '../database/db.sqlite'
		}
	}

	return {
		client: connections.default,
		connection: connections[connections.default]
	};
}