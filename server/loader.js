require("module-alias/register");
const _ = require("lodash");
const path = require("path");
const config = require("@config/general");

/** dot env */
require("dotenv").config({
  path: config.env_file,
});

/** Load ORM */
require("@load/bookshelf");