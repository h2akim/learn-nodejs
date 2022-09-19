const { toPascalCase } = require("js-convert-case");
const bookshelf = require("@load/bookshelf");
const name = require("path").parse(__filename).name;

require("@models/user");
require("@models/comment");

const upvote = require("./base")(name, {
  user() {
    return this.belongsTo("User");
  },
  comment() {
    return this.belongsTo("Comment");
  },
});

module.exports = bookshelf.model(toPascalCase(name), upvote);
