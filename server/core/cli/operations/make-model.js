const _ = require('lodash');
const fs = require('fs/promises');
const path = require('path')
const handlebars = require('handlebars');

module.exports = async (args) => {
	if (_.isEmpty(args)) {
		console.error('🛑 Oops! Please provide model name.');
		return;
	}

	const modelName = args[0];
	try {
		const existingFile = await fs.stat(path.resolve(process.cwd() + `/server/app/models/${modelName}.js`));
		if (existingFile) {
			console.error(`🛑 Oops! Model ${modelName}.js is already exists`);
			return;
		}
	} catch (e) {
		// just proceed if file not exists
	}

	try {
		const sourceFile = await fs.readFile(path.resolve(process.cwd() + '/server/core/cli/stubs/model.stub'));
		const templateString = sourceFile.toString();
		const template = handlebars.compile(templateString);
		const contents = template({
			modelName: modelName
		});

		// write file
		await fs.writeFile(path.resolve(process.cwd() + `/server/app/models/${modelName}.js`), contents)
		console.log(`✅ Succesfully created new model - ${modelName}.js`);
	} catch (e) {
		if (e.code === 'ENOENT') {
			console.error('🛑 Failed to read template file / not exists');
		}
	}
}