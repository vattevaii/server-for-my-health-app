const router = require("express").Router();
const docController = require("../controllers/docController");
const { isAuthenticated } = require("../middlewares/auth");
const personController = require("../controllers/personController");

// GET All Doctors
router.get("/all", docController.getAll);
// GET A Doctor
router.get("/:id", docController.getOne);
// Edit doctor details
router.put("/:id", docController.create);
// New Person
router.post("/register", isAuthenticated, personController.create);
module.exports = router;
