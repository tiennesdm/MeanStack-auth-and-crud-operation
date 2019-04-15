const mongoose = require("mongoose");
mongoose
  .connect(
  //  "mongodb+srv://tiennesdm:BmKfRMa4IhjaDhRU@meanstack-aphhh.mongodb.net/tiennesdm?retryWrites=true",
    'mongodb://localhost:27017/teacher', {useNewUrlParser: true}
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });
  module.exports = mongoose;
