const router = require("express").Router();
const postController = require("../controllers/postController");
const { isAuthenticated } = require("../middlewares/auth");

// GET TIMELINE POSTS
router.get("/timeline", [isAuthenticated], postController.create);

// GET user's all POSTS
router.get("/profile/:username", [isAuthenticated], postController.create);

// CREATE A POST
router.post("/", [isAuthenticated], postController.create);

// UPDATE A POST
router.put("/:id", [isAuthenticated], postController.create);

// DELETE A POST
router.delete("/:id", [isAuthenticated], postController.create);

// LIKE / DISLIKE A POST
router.put("/:id/like", [isAuthenticated], postController.create);

// GET A POST
router.get("/:id", [isAuthenticated], postController.create);

module.exports = router;
