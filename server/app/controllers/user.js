/** User Controller */
const User = require("@models/user");
const _ = require("lodash");

const getFirstUser = async (req, res) => {
  const user = await User.query((query) => {
		query.limit(1);
	}).fetch();
  res.json(user);
};

const getRandomizeUser = async (req, res) => {
  const users = await User.fetchAll();
	const randomUser = _.first(_.sampleSize(users.toJSON()));
  res.json(randomUser);
};

module.exports = {
  getFirstUser,
	getRandomizeUser
};
