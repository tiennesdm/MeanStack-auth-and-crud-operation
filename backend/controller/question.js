const Question = require("../models/question");
exports.createquestion =   (req, res, next) => {
  console.log("question",req.body.question);
 // console.log("creatorid", req.userData.userId);

  const question = new Question({
    question: req.body.question,
  //  creator: req.userData.userId
  });
  question
    .save()
    .then(createdquestion => {
      res.status(201).json({
        message: "question added successfully",
        question: {
          ...createdquestion,
          id: createdquestion._id
        }
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Creating a question failed!"
      });
    });
}
