const defaultConfigurations = {
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		directory: './database/migrations',
		tableName: 'migrations'
	},
	seeds: {
        directory: './database/seeds'
    }
};

const connections = {
	development: {
		default: process.env.DB_CLIENT ?? 'mysql',
		mysql: {
			host: process.env.DB_HOST,
			user: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_DATABASE,
			charset: process.env.DB_CHARSET ?? 'utf8',
		},
		sqlite: {
			filename: process.env.DB_DATABASE ?? './database/db_dev.sqlite'
		}
	},
	production: {
		default: process.env.DB_CLIENT ?? 'mysql',
		mysql: {
			host: process.env.DB_HOST,
			user: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_DATABASE,
			charset: process.env.DB_CHARSET ?? 'utf8',
		},
		sqlite: {
			filename: process.env.DB_DATABASE ?? './database/db.sqlite'
		}
	}
}

module.exports = () => {
	const environment = process.env.NODE_ENV ?? 'development';
	let connection = {};

	if (connections[environment]) {
		connection = connections[environment];
	} else {
		throw 'Invalid database connection environment';
	}

	return {
		client: connection.default,
		connection: connection[connection.default],
		...defaultConfigurations
	};
}