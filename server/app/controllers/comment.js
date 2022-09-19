/** Comment Controller */
const Comment = require("@models/comment");
const { knex } = require("@load/bookshelf");

const index = async (req, res) => {
  const comment = await Comment.query((query) => {
    query
      .select([
        "*",
        knex("upvotes")
          .where("upvotes.comment_id", knex.raw("??", "comments.id"))
          .count()
          .as("upvote_count"),
      ])
      .where("parent_id", null)
      .orderBy("created_at", "desc")
      .orderBy("upvote_count", "desc");
  }).fetchAll({
    withRelated: ["user", "replies.user"],
  });
  res.json(comment);
};

const store = async (req, res) => {
	const user = req.header('User-Id');
	const { comment, reply_to: replyTo } = req.body;

	let savingData = {
		user_id: user,
		comment: comment,
	}

	if (replyTo) {
		savingData['parent_id'] = replyTo;
	}

	try {
		const newComment = await Comment.forge().save(savingData);
		res.json(newComment)
	} catch (err) {
		res.status(500).send('Whoops! Looks like error was on our end.');
	}
};


module.exports = {
  index,
  store
};
