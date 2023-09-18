const mongoose = require("mongoose");
const historySchema = new mongoose.Schema({
  sender: { type: String },
  receiver: { type: String },
  amount: { type: Number },
  status: { type: String },
  date:   { type:String}
});
module.exports = mongoose.model("histories", historySchema);
