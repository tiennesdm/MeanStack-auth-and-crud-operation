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
exports.getallAnswer = (req, res, next) => {
  Answer.find()
    .then(answer => {
      if (answer) {
        res.status(200).json(answer);
      } else {
        res.status(404).json({ message: "Answer not found!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching Answer failed!"
      });
    });
}
