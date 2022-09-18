/** Comment Controller */
const Comment = require("@models/comment");

const index = async (req, res) => {
  const comment = await Comment.where("parent_id", null).fetchAll({
    withRelated: ["user", "replies.user"],
  });
  res.json(comment);
};

const store = (req, res) => {
  //
};

const update = (req, res) => {
  //
};

const destroy = (req, res) => {
  //
};

module.exports = {
  index,
  store,
  update,
  destroy,
};
