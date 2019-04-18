const mongoose = require("mongoose");

const optionSchema = mongoose.Schema({
  options : { type : Array , "default" : [],
  validate: [arrayLimit, '{PATH} exceeds the limit of 4']
 },
 // questionId: { type: mongoose.Schema.Types.ObjectId, ref: "Questions", required: true },
//  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});
function arrayLimit(val) {
  return val.length <= 4;
}
module.exports = mongoose.model("Options", optionSchema);
