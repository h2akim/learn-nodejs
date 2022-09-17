const comment = require('@controllers/comment');
const path = require('path');

module.exports = (app) => {
	app.get('/api/comments', comment.index);
}