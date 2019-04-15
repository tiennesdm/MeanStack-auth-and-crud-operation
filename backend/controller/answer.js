const Answer = require("../models/answer");
exports.createanswer =   (req, res, next) => {
  console.log("answer",req.body.answer);
  //console.log("creatorid", req.userData.userId);

  const answer = new Answer({
    answer: req.body.answer,
    questionId: req.body.questionId
  });
  answer
    .save()
    .then(createdanswer => {
      res.status(201).json({
        message: "answer added successfully",
        answer: {
          ...createdanswer,
          id: createdanswer._id
        }
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Creating a answer failed!"
      });
    });
}
