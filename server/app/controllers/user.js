/** User Controller */
const User = require("@models/user");
const _ = require("lodash");

const getFirstUser = async (req, res) => {
  const user = await User.query((query) => {
		query.limit(1);
	}).fetch();
  res.json(user);
};

module.exports = {
  getFirstUser,
};
