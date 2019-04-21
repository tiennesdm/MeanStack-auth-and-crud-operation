const mongoose = require("mongoose");

const optionSchema = mongoose.Schema({
  option : { type : Array , "default" : [],required: true ,
  validate: [arrayLimit, '{PATH} exceeds the limit of 4']
 },
});
function arrayLimit(val) {
  return val.length <= 4;
}
module.exports = mongoose.model("Options", optionSchema);
