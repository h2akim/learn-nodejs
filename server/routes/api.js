const CommentController = require("@controllers/comment");
const UserController = require("@controllers/user");
const UpvoteController = require("@controllers/upvote");
const EventController = require("@controllers/event");

module.exports = (app) => {
	/** Comments */
  app.get("/api/comments", CommentController.index);
	app.get("/api/comments/:commentId", CommentController.show);
	app.post("/api/comments", CommentController.store);

	/** Upvote */
	app.post("/api/upvotes", UpvoteController.store);

	/** User */
  app.get("/api/user", UserController.getFirstUser);

	/** Events */
	app.get("/api/events", ...EventController.index)
};
