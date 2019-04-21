const express = require("express");
const checkAuth = require("../middleware/check-auth");
const addQuestionController = require("../controller/addQuestion");

const router = express.Router();



router.post(
  "", checkAuth,
  addQuestionController.createQuestion
);
router.get("",addQuestionController.getOption);
router.get("/answer", addQuestionController.getAnswer);

module.exports = router;
