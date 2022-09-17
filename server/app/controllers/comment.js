const Comment = require('@models/comment');

const index = (async (req, res) => {
	const comment = await Comment.fetchAll({
		withRelated: ['user']
	})

	res.json(comment);
});

const store = ((req, res) => {
	//
});

const update = ((req, res) => {
	//
});

const destroy = ((req, res) => {
	//
});

module.exports = {
	index,
	store,
	update,
	destroy
};