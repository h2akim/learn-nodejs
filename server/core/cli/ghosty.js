#! /usr/bin/env node
require('module-alias/register');
const config = require('@config/general')
require('dotenv').config({
	'path': config.env_file
});
const _ = require("lodash");
var clc = require("cli-color");

let args = process.argv.slice(2);
const operationMapping = {
	'make:model': {
		description: 'Create new model - make:model <name>',
		file: './operations/make-model.js'
	},
	'make:controller': {
		description: 'Create new controller - make:controller <name>',
		file: './operations/make-controller.js'
	},
	'make:migration': {
		description: 'Create new migration - make:migration <name>',
		file: './operations/make-migration.js'
	},
	'db:migrate': {
		description: 'Migrate latest migrations',
		file: './operations/db-migrate.js'
	},
	'db:seed': {
		description: 'Seed database',
		file: './operations/db-seed.js'
	},
};

const operation = args.shift();

const run = () => {
	if (_.isEmpty(operation)
		|| operation == '-h'
		|| operation == '--help') {
		/** Show help */

		let keyDescription = []
		const commandHighlight = clc.whiteBright.bgXterm(196);
		const allKeys = Object.keys(operationMapping).map((key) => {
			keyDescription.push([
				`${commandHighlight(key)}`,
				`\t\t${operationMapping[key].description}`
			]);
		})

		console.log('👻 Available Ghosty commands')
		process.stdout.write(
			clc.columns(keyDescription, { sep: '' })
		  );
		return;
	}

	if (!operationMapping[operation]) {
		console.error('Invalid operation - '+operation);
		return;
	}
	const runOperation = require(operationMapping[operation].file)(args);
}

run();