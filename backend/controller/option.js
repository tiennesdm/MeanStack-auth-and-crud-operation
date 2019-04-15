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
