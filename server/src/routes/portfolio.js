import express from "express";


const router = express.Router();

// GET all portfolio items
router.get("/", async (req, res) => {
  try {
    const projects = await Portfolio.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new portfolio item
router.post("/", async (req, res) => {
  const { title, description, image, link } = req.body;
  const newProject = new Portfolio({ title, description, image, link });
  try {
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
