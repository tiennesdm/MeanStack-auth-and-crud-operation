const Option = require("../models/option");
exports.createoption =   (req, res, next) => {
  console.log("i am coming from option");
  console.log("option",req.body.option);
  //console.log("creatorid", req.userData.userId);
  return new Option({
    option
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
