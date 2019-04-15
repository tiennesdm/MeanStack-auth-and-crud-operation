const express = require("express");


//const Post = require("../models/post");
const checkAuth = require("../middleware/check-auth");
const questionController = require("../controller/question");

const router = express.Router();



router.post(
  "",
  questionController.createquestion
);

/*router.put(
  "/:id",
  checkAuth,
  postController.updatePost
);

router.get("", checkAuth, postController.getPost);

router.get("/:id", postController.getPostById);

router.delete("/:id", checkAuth, postController.deletePost); */

module.exports = router;
