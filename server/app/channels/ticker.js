const { createChannel } = require("better-sse");

const ticker = createChannel();

module.exports = ticker;
