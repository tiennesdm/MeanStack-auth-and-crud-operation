const Answer = require("../models/answer");
exports.createanswer =   (req, res, next) => {
  console.log("I am coming from answer");
 // console.log("answer",req.body.answer);
  //console.log("creatorid", req.userData.userId);
  return new Answer({
    answer
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

