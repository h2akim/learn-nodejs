#! /usr/bin/env node
const yargs = require("yargs");
let args = process.argv.slice(2);
const operationMapping = {
	'make:model': './operations/create-model.js',
	'make:controller': './operations/create-controller.js',
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