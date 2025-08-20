import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db.js";
import portfolioRoutes from "./routes/portfolio.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/portfolio", portfolioRoutes);

// Test route
app.get("", (req, res) => {
  res.send("Server is running ✅");
});

// Connect DB & Start server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
});
