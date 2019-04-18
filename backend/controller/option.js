const Option = require("../models/option");
exports.createoption =   (req, res, next) => {
  console.log("option",req.body.option);
  //console.log("creatorid", req.userData.userId);

  const option = new Option({
    option: req.body.option,
    questionId: req.body.questionId
  });
  option
    .save()
    .then(createdoption => {
      res.status(201).json({
        message: "option added successfully",
        option: {
          ...createdoption,
          id: createdoption._id
        }
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Creating a option failed!"
      });
    });
}
exports.getallOption = (req, res, next) => {
  Option.find({})
    .then(option => {
      if (option) {
        res.status(200).json(option);
      } else {
        res.status(404).json({ message: "Option not found!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching Answer failed!"
      });
    });
}
