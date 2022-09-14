const { toPascalCase } = require('js-convert-case');
const bookshelf = require('@load/bookshelf');
const name = require('path').parse(__filename).name;

require('@models/comment');

const user = require('./base')(name, {
	comments() {
		return this.hasMany('Comment');
	}
});

module.exports = bookshelf.model(toPascalCase(name), user);