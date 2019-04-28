const mongoose = require("mongoose");

const assignedtaskSchema = mongoose.Schema({
 // creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  assigner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  //questionId :{type:}
});
function arrayLimit(val) {
  return val.length >=0;
}
module.exports = mongoose.model("assignedtasks", assignedtaskSchema);
