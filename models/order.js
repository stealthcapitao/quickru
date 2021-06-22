var mongoose = require("mongoose");

var orderSchema = new mongoose.Schema({
   name: String,
   category: {type: String, possibleValues: ['Design','Video','Text','Graphics', 'Programming', 'GameDev'] },
   image: String,
   description: String,
   cost: Number,
   createdAt: { type: Date, default: Date.now },
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   }
});

module.exports = mongoose.model("Order", orderSchema);