const Question = require("../models/question");
const Answer = require("../models/answer");
const Option = require("../models/option");
const {createanswer} = require("./answer");
const {createoption} = require("./option")
exports.createQuestion = async (req, res, next) => {
  console.log(req.body.option);
  const option = new Option({
    option: req.body.option,
  });
  const answer = new Answer({
    answer: req.body.answer
  });
  const questions = new Question({
    question: req.body.question,
    optionId: option._id,
    answerId: answer._id,
    creator: req.userData.userId
  });
  try {


  let info = await Promise.all([questions.save(), option.save(), answer.save() ]);

  console.log(info);
  res.status(200).send({
    message: "Question added successfully"
  })

} catch(ex) {
  console.log(ex.message);
  res.status(400).send({ message: "cannot Upload"})
}
}
exports.getAnswer = (req, res,next) => {
  Question.find({}).populate('answerId')
  .then(userInfo => {
      if (userInfo) {
          res.status(200).json({ info: userInfo });
      } else {
          res.status(404).json({ message: "Couldnot get the Info" });
      }
  })
  .catch(error => {
      res.status(500).json({
          message: "Getting UserInfo Failed"
      });
  });
}
exports.getOption = (req, res, next) => {
  Question.find({}).populate('optionId')
  .then(userInfo => {
      if (userInfo) {
          res.status(200).json({ info: userInfo });
      } else {
          res.status(404).json({ message: "Couldnot get the Info" });
      }
  })
  .catch(error => {
      res.status(500).json({
          message: "Getting UserInfo Failed"
      });
  });

}
