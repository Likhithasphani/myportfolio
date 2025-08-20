import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  link: { type: String },
});

export default mongoose.model("Portfolio", PortfolioSchema);
