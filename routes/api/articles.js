const router = require("express").Router();
const artCtrl = require("../../controllers/articlesController");

// Matches with "/api/articles"
router.route("/")
  .get(artCtrl.findAll)
  .post(artCtrl.create);

// Matches with "/api/articles/:id"
router.route("/:id")
  .delete(artCtrl.remove);

module.exports = router;
