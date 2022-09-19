/** Upvote Controller */
const Upvote = require("@models/upvote");
const ticker = require("../channels/ticker");

const store = async (req, res) => {
  const user = req.header("User-Id");
  const { id, parent_id } = req.body;

  const upvote = await Upvote.query((query) => {
    query.where("comment_id", id).where("user_id", user);
  }).fetch({ require: false });

  if (!upvote) {
    const savingData = {
      comment_id: id,
      user_id: user,
    };
    await Upvote.forge().save(savingData);
  } else {
    await Upvote.query((query) => {
      query.where("comment_id", id).where("user_id", user);
    }).destroy({ require: false });
  }

  broadcastNewUpvote({
    id: id,
    parent_id: parent_id,
  });

  res.json({
    success: true,
  });
};

const broadcastNewUpvote = (comment) => {
  const newData = {
    id: comment.id,
    parent_id: comment.parent_id,
  };
  ticker.broadcast(newData, "comment-update");
};

module.exports = {
  store,
};
