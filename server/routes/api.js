const CommentController = require("@controllers/comment");
const UserContoller = require("@controllers/user");

module.exports = (app) => {
	/** Comments */
  app.get("/api/comments", CommentController.index);
	app.post("/api/comments", CommentController.store);

	/** User */
  app.get("/api/user", UserContoller.getFirstUser);
};
