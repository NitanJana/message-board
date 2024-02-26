import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  sendDate: String,
});

export default mongoose.model("message", messageSchema);
