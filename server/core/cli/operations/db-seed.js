const _ = require('lodash');
const { exec } = require('child_process');
const config = require('@config/general');

module.exports = async () => {
	const knexFile = config.knex_file;
	exec(`knex seed:run --knexfile=${knexFile}`, (error, stdout, stderr) => {
		if (error) {
			console.log(`🛑 Failed to seed database: ${error.message}`);
			return;
		}

		if (stderr) {
			console.log(`🛑 Failed to seed database: ${stderr}`);
			return;
		}

		console.log(`${stdout}`);
		console.log(`✅ Succesfully run seeder.`);
	});
}