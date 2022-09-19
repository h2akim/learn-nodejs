const { toPascalCase } = require("js-convert-case");
const bookshelf = require("@load/bookshelf");
const name = require("path").parse(__filename).name;
const { knex } = require("@load/bookshelf");

require("@models/user");

const comment = require("./base")(name, {
  user() {
    return this.belongsTo("User");
  },
  replies() {
    return this.hasMany("Comment", "parent_id", "id").query((query) => {
      query
        .select([
          "*",
          knex("upvotes")
            .where("upvotes.comment_id", knex.raw("??", "comments.id"))
            .count()
            .as("upvote_count"),
        ])
        .orderBy("created_at", "desc")
        .orderBy("upvote_count", "desc");
    });
  },
});

module.exports = bookshelf.model(toPascalCase(name), comment);
