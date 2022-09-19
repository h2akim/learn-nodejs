/** Event Controller */
const ticker = require("../channels/ticker");
const { createSession } = require("better-sse");

const index = [
  async (req, res, next) => {
    const session = await createSession(req, res);
		ticker.register(session);
  }
];

module.exports = {
  index,
};
