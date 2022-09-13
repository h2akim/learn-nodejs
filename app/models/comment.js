const { toPascalCase } = require('js-convert-case');
const bookshelf = require('@load/bookshelf');
const name = require('path').parse(__filename).name;

require('@models/user');

const model = require('@load/models')(name, {
	user() {
		return this.belongsTo('User')
	}
});

module.exports = bookshelf.model(toPascalCase(name), model);