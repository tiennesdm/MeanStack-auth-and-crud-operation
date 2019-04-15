const express = require("express");


//const Post = require("../models/post");
const checkAuth = require("../middleware/check-auth");
const answerController = require("../controller/answer");

const router = express.Router();



router.post(
  "",
  answerController.createanswer
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
