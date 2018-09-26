const router = require("express").Router();
const articleControl = require("../../controllers/articlesController");

// Matches with "/api/articles"
router.route("/")
  .get(articleControl.findAll)
  .post(articleControl.create);

// Matches with "/api/articles/:id"
router.route("/:id")
  .delete(articleControl.remove);

module.exports = router;
