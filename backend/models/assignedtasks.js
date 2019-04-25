const mongoose = require("mongoose");

const assignedtaskSchema = mongoose.Schema({
 // creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  assigner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  questionId : [ { type : mongoose.Schema.Types.ObjectId , "default" : [],required: true , ref:"Questions",
  validate: [arrayLimit, '{PATH} more than 1']
 }],
});
function arrayLimit(val) {
  return val.length >=0;
}
module.exports = mongoose.model("assignedtasks", assignedtaskSchema);
