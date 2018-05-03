const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  phone_id: { type: Schema.Types.ObjectId, ref: "Phone" },
  text: { type: String }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
