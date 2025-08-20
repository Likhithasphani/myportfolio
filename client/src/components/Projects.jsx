import React, { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="projects" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project._id} className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-indigo-700">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
            <p className="mt-2 font-medium text-gray-800">Tech Stack: {project.techStack.join(", ")}</p>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              {project.features.map((feat, index) => <li key={index}>{feat}</li>)}
            </ul>
            {project.githubLink && <a href={project.githubLink} target="_blank" className="text-indigo-500 mt-3 inline-block">GitHub</a>}
          </div>
        ))}
      </div>
    </section>
  );
}
