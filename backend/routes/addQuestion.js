const express = require("express");
const checkAuth = require("../middleware/check-auth");
const addQuestionController = require("../controller/addQuestion");

const router = express.Router();



router.post(
  "", checkAuth,
  addQuestionController.createQuestion,addQuestionController.createAssigned
);
router.post("/multiassigned", addQuestionController.createMultiAssignedQuestion);
router.get("",addQuestionController.getOption);
router.get("/answer", addQuestionController.getAnswer);
router.get("/question", addQuestionController.getArray);
router.get("/assigned",addQuestionController.getAssignedQuestion);
router.get("/getQuestion", checkAuth, addQuestionController.getQuestion);
//router.delete("/assigned/delete",addQuestionController.deleteassignedquestion);


module.exports = router;
