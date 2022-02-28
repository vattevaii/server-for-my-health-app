const router = require("express").Router();
const docController = require("../controllers/postController");
const { isAuthenticated } = require("../middlewares/auth");

// GET All Doctors
router.get("/all", docController.getAll);
// GET A Doctor
router.get("/:id", docController.getOne);
// Edit doctor details
router.put("/:id", docController.create);
module.exports = router;
