/** User Controller */
const User = require('@models/user');
const _ = require('lodash');

const randomizeUser = (async (req, res) => {
	const users = await User.fetchAll();
	const randomUser = _.first(_.sampleSize(users.toJSON()));
	res.json(randomUser);
})

module.exports = {
	randomizeUser
};