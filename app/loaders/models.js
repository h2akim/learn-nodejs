const bookshelf = require('@load/bookshelf');
const pluralize = require('pluralize');

module.exports = (modelName, data = {}) => {
	defaultData = {
		tableName: pluralize(modelName),
		hasTimestamps: true,
		...data
	};

	return bookshelf.Model.extend(defaultData);
}