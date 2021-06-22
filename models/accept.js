var mongoose = require("mongoose");

var acceptSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String,
   createdAt: { type: Date, default: Date.now },
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   order: String
});

module.exports = mongoose.model("Accept", acceptSchema);