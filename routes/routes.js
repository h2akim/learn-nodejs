const comments = require('@controllers/comments')

module.exports = (app) => {
	app.get('/', comments.index);
}