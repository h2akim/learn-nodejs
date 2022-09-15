const index = (async (req, res) => {
	res.status(200);
	res.send("Testing");
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