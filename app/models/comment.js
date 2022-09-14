const { toPascalCase } = require('js-convert-case');
const bookshelf = require('@load/bookshelf');
const name = require('path').parse(__filename).name;

require('@models/user');

const comment = require('./base')(name, {
	user() {
		return this.belongsTo('User')
	}
});

module.exports = bookshelf.model(toPascalCase(name), comment);