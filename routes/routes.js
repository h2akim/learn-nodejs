const comment = require('@controllers/comment')

module.exports = (app) => {
	app.get('/', comment.index);
}