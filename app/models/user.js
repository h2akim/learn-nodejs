const { toPascalCase } = require('js-convert-case');
const bookshelf = require('@load/bookshelf');
const name = require('path').parse(__filename).name;

require('@models/comment');

const model = require('@load/models')(name, {
	comments() {
		return this.hasMany('Comment');
	}
});

module.exports = bookshelf.model(toPascalCase(name), model);