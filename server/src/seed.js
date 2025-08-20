import Project from "./models/Project.js";

const seedProjects = async () => {
  await Project.deleteMany({});
  await Project.create([
    {
      title: "My Portfolio Website",
      description: "A React + Node.js project showcasing my work.",
      imageUrl: "https://example.com/image.png",
      liveLink: "https://example.com",
      githubLink: "https://github.com/username/project"
    },
    {
      title: "E-commerce App",
      description: "Full-stack e-commerce application with MERN stack.",
      imageUrl: "https://example.com/ecom.png",
      liveLink: "https://example.com/ecom",
      githubLink: "https://github.com/username/ecom"
    }
  ]);
  console.log("✅ Projects seeded!");
};

seedProjects();
