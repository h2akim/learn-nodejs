#! /usr/bin/env node
require('module-alias/register');

let args = process.argv.slice(2);
const operationMapping = {
	'make:model': './operations/make-model.js',
	'make:controller': './operations/make-controller.js',
	'make:migration': './operations/make-migration.js',
	'db:migrate': './operations/db-migrate.js',
	'db:seed': './operations/db-seed.js',
};

const operation = args.shift();

const run = () => {
	if (!operationMapping[operation]) {
		console.error('Invalid operation - '+operation);
		return;
	}
	const runOperation = require(operationMapping[operation])(args);
}

run();