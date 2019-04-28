const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  question: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  optionId: { type: mongoose.Schema.Types.ObjectId, ref: "Options", required: true },
  answerId:{ type: mongoose.Schema.Types.ObjectId, ref: "Answers", required: true },
});
module.exports = mongoose.model("Questions", questionSchema);
