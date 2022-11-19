import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("BlogSchema", blogSchema);
