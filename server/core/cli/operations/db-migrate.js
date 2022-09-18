const _ = require('lodash');
const { exec } = require('child_process');
const config = require('@config/general');

module.exports = async () => {
	const knexFile = config.knex_file;
	exec(`knex migrate:latest --knexfile=${knexFile}`, (error, stdout, stderr) => {
		if (error) {
			console.log(`🛑 Failed to migrate database: ${error.message}`);
			return;
		}

		if (stderr) {
			console.log(`🛑 Failed to migrate database: ${stderr}`);
			return;
		}

		console.log(`${stdout}`);
		console.log(`✅ Succesfully run migration.`);
	});
}