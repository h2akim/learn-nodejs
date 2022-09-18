const CommentController = require("@controllers/comment");
const UserContoller = require("@controllers/user");

module.exports = (app) => {
  app.get("/api/comments", CommentController.index);
  app.get("/api/users/random", UserContoller.randomizeUser);
};
