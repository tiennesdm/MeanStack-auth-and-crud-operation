const express = require("express");


const Post = require("../models/post");
const checkAuth = require("../middleware/check-auth");
const postController = require("../controller/posts");

const router = express.Router();



router.post(
  "",
  checkAuth,
  postController.createPost
);

router.put(
  "/:id",
  checkAuth,
  postController.updatePost
);

router.get("", checkAuth, postController.getPost);

router.get("/:id", postController.getPostById);

router.delete("/:id", checkAuth, postController.deletePost);

module.exports = router;
