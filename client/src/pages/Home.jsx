import React, { useEffect, useState } from "react";
import { getProjects, sendMessage } from "../api";

// Skills categories with items
const skillCategories = [
  { title: "Frameworks", items: ["React JS", "Next JS", "Bootstrap", "Express JS", "NodeJS"] },
  { title: "Databases", items: ["MySQL", "MongoDB", "SQLite"] },
  { title: "Languages", items: ["C", "C++", "Java", "JavaScript", "Python"] },
  { title: "Other Skills", items: ["API", "OOPs", "DSA", "EJS", "jQuery"] },
];

// Individual skill icons (optional)
// client/src/data/skills.js
export const skills = [
  // Technical Skills
  { name: "OS", img: "/images/os.png" },
  { name: "React", img: "/images/react.png" },
  { name: "Python", img: "/images/python.jpg" },
  { name: "CSS", img: "/images/css.png" },
  { name: "HTML", img: "/images/html.png" },
  { name: "Redux", img: "/images/redux.png" },
  { name: "Tailwind", img: "/images/tailwind.png" },
  { name: "Linux", img: "/images/linux.png" },
  { name: "MongoDB", img: "/images/mongodb.png" },
  { name: "Git", img: "/images/git.png" },
  { name: "Node Js", img: "/images/node.png" },
  { name: "C", img: "/images/c.png" },
  { name: "JAVA", img: "/images/java.png" },
  { name: "Github", img: "/images/github.png" },
  { name: "C++", img: "/images/cpp.png" },
  { name: "Express Js", img: "/images/express.png" },
  { name: "MySQL", img: "/images/mysql.jpg" },
  { name: "OOPs", img: "/images/oop.jpg" },
  { name: "JavaScript", img: "/images/javascript.png" },
  { name: "API", img: "/images/api.png" },
  { name: "EJS", img: "/images/ejs.png" },
  { name: "DSA", img: "/images/dsa.png" },
  { name: "Bootstrap", img: "/images/bootstrap.png" },
  { name: "JQuery", img: "/images/jquery.png" },
  { name: "Docker", img: "/images/docker.png" },
  { name: "Postman", img: "/images/postman.png" },
  { name: "Material-UI", img: "/images/materialui.png" },

  // Soft Skills (you can add icons if available)
  { name: "Leadership", img: "/images/leadership.png" },
  { name: "Teamwork", img: "/images/teamwork.png" },
  { name: "Decision Making", img: "/images/decision.png" },
  { name: "Consistency", img: "/images/consistency.png" },

  // Coursework (optional)
  { name: "DBMS", img: "/images/dbms.png" },
  { name: "SQL", img: "/images/sql.png" },
  { name: "DSA (C++)", img: "/images/dsa.png" },
  { name: "Operating System", img: "/images/os.png" },
  { name: "Computer Networks", img: "/images/network.png" },
  { name: "OOPs", img: "/images/oop.jpg" },
  { name: "JAVA", img: "/images/java.png" },

  // Frameworks
  { name: "React JS", img: "/images/react.png" },
  { name: "Next JS", img: "/images/nextjs.jpg" },
  { name: "Bootstrap", img: "/images/bootstrap.png" },
  { name: "Express JS", img: "/images/express.png" },
  { name: "NodeJS", img: "/images/node.png" },

  // Databases
  { name: "MySQL", img: "/images/mysql.jpg" },
  { name: "MongoDB", img: "/images/mongodb.png" },
  { name: "SQLite", img: "/images/sqlite.png" },
];


export default function Home() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    getProjects()
      .then(res => setProjects(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await sendMessage(form);
      setStatus(res.data.msg || "Message sent successfully ✅");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.log(err);
      setStatus(err.response?.data?.msg || "Error sending message ❌");
    }
  };

  const scrollToContact = () => {
    document.getElementById("contactus").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
{/* ===== Hero Section ===== */}
<section
  id="home"
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5rem 2rem",
    background: "#fff",
    gap: "2rem",
    flexWrap: "wrap",
  }}
>
  <div style={{ flex: "1", minWidth: "100px", textAlign: "left", animation: "fadeIn 1.5s ease forwards" }}>
    <p style={{ fontSize: "1rem", color: "#6b7280" }}>Hi! I'm</p>
    <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)", margin: "0.5rem 0", color: "#111827" }}>
      Likhitha Lakshmi
    </h1>
    <h2 style={{ fontSize: "clamp(1rem,3vw,1.5rem)", margin: "0.5rem 0", color: "#f97316" }}>
      Front End Developer | React & Node.js
    </h2>
    <p style={{ color: "#6b7280", margin: "1rem 0", maxWidth: "500px" }}>
      I build modern and responsive web applications. Passionate about creating seamless user experiences and contributing to innovative projects.
    </p>
    <button
      onClick={scrollToContact}
      style={{
        padding: "0.8rem 2rem",
        background: "#f97316",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold",
        marginTop: "1rem",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={e => e.currentTarget.style.background = "#ea580c"}
      onMouseLeave={e => e.currentTarget.style.background = "#f97316"}
    >
      Contact Me
    </button>
  </div>

  <div style={{ flex: "1", minWidth: "300px", textAlign: "center", marginTop: "2rem" }}>
    <div
      style={{
        display: "inline-block",
        padding: "12px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #f97316, #4f46e5)",
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
        transition: "transform 0.3s, box-shadow 0.3s",
        animation: "floatImage 4s ease-in-out infinite alternate",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 15px 25px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
      }}
    >
      <img
        src="/images/profile.jpg"
        alt="Likhitha Lakshmi"
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "20px solid #fff",
          display: "block"
        }}
      />
    </div>
  </div>

  <style>{`
    @keyframes floatImage {
      0% { transform: translateY(0); }
      50% { transform: translateY(-12px); }
      100% { transform: translateY(0); }
    }
    @keyframes fadeIn {
      0% { opacity: 0; transform: translateX(-20px); }
      100% { opacity: 1; transform: translateX(0); }
    }
  `}</style>
</section>


      {/* ===== About Me Section ===== */}
   <section
  id="about"
  style={{
    padding: "5rem 2rem",
    background: "#e0e7ff",
    display: "flex",
    justifyContent: "center",
  }}
>
  <div
    style={{
      maxWidth: "700px",
      padding: "2rem",
      borderRadius: "15px",
      background: "#fff",
      textAlign: "center",
      boxShadow: "0 0 20px rgba(0,0,0,0.1)",
      position: "relative",
      overflow: "hidden",
      animation: "floatGlow 5s ease-in-out infinite alternate",
    }}
  >
    <h2 style={{ marginBottom: "1rem", color: "#4f46e5" }}>About Me</h2>
    <p style={{ lineHeight: "1.6", color: "#111827" }}>
      I am a Computer Science graduate with a passion for web development using React, JavaScript, and Node.js. 
      I enjoy building responsive and user-friendly web applications and contributing to innovative projects as a Front End Developer. 
      I aim to deliver modern, scalable solutions while continuously learning and improving my skills.
    </p>

    <style>{`
      @keyframes floatGlow {
        0% {
          transform: translateY(0);
          box-shadow: 0 0 20px rgba(79,70,229,0.4);
        }
        50% {
          transform: translateY(-15px);
          box-shadow: 0 0 30px rgba(249,115,22,0.6);
        }
        100% {
          transform: translateY(0);
          box-shadow: 0 0 20px rgba(79,70,229,0.4);
        }
      }
    `}</style>
  </div>
</section>


      {/* ===== Expertise / What I Do Section ===== */}
      <section id="expertise" style={{ padding: "5rem 2rem", background: "#f9fafb", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "#111827" }}>What I Do</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          justifyItems: "center"
        }}>
          {/* Frontend */}
          <div style={{
            background: "#fff",
            padding: "2rem",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            transition: "transform 0.3s, box-shadow 0.3s",
            cursor: "pointer"
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
            }}
          >
            <img src="/images/frontend.png" alt="Frontend Development" style={{ width: "200px", marginBottom: "1rem" }} />
            <h3 style={{ marginBottom: "0.5rem", color: "#4f46e5" }}>Frontend Development</h3>
            <p style={{ color: "#6b7280", fontSize: "0.95rem" }}>
              Building responsive, modern, and interactive user interfaces using React, HTML, CSS, and JavaScript.
            </p>
          </div>

          {/* Backend */}
          <div style={{
            background: "#fff",
            padding: "2rem",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            transition: "transform 0.3s, box-shadow 0.3s",
            cursor: "pointer"
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
            }}
          >
            <img src="/images/backend.jpg" alt="Backend Development" style={{ width: "200px", marginBottom: "1rem" }} />
            <h3 style={{ marginBottom: "0.5rem", color: "#4f46e5" }}>Backend Development</h3>
            <p style={{ color: "#6b7280", fontSize: "0.95rem" }}>
              Designing and developing robust server-side logic, REST APIs, and database management using Node.js and Express.
            </p>
          </div>

          {/* Web Development */}
          <div style={{
            background: "#fff",
            padding: "2rem",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            transition: "transform 0.3s, box-shadow 0.3s",
            cursor: "pointer"
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
            }}
          >
            <img src="/images/webdev.jpg" alt="Web Development" style={{ width: "200px", marginBottom: "1rem" }} />
            <h3 style={{ marginBottom: "0.5rem", color: "#4f46e5" }}>Web Development</h3>
            <p style={{ color: "#6b7280", fontSize: "0.95rem" }}>
              Creating full-featured web applications combining frontend and backend for seamless user experiences.
            </p>
          </div>

          {/* MERN Stack */}
          <div style={{
            background: "#fff",
            padding: "2rem",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            transition: "transform 0.3s, box-shadow 0.3s",
            cursor: "pointer"
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
            }}
          >
            <img src="/images/mern.png" alt="MERN Stack" style={{ width: "150px", marginBottom: "1rem" }} />
            <h3 style={{ marginBottom: "0.5rem", color: "#4f46e5" }}>MERN Stack</h3>
            <p style={{ color: "#6b7280", fontSize: "0.95rem" }}>
              Developing full-stack applications using MongoDB, Express, React, and Node.js for scalable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Projects Section ===== */}
      <section id="projects" style={{ padding: "5rem 2rem", textAlign: "center", background: "#f9fafb" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "#111827" }}>Projects</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
          gap: "2rem",
          justifyItems: "center"
        }}>
          {projects.map(p => (
            <div
              key={p._id}
              style={{
                background: "#fff",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
                width: "100%",
                maxWidth: "300px"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
              }}
            >
              {p.imageUrl && <img src={p.imageUrl} alt={p.title} style={{ width: "100%", height: "180px", objectFit: "cover" }} />}
              <div style={{ padding: "1rem" }}>
                <h3 style={{ margin: "0.5rem 0", color: "#1f2937" }}>{p.title}</h3>
                <p style={{ color: "#6b7280", fontSize: "0.95rem", minHeight: "60px" }}>{p.description}</p>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      marginTop: "0.8rem",
                      padding: "0.5rem 1rem",
                      background: "#4f46e5",
                      color: "#fff",
                      borderRadius: "8px",
                      textDecoration: "none",
                      fontWeight: "500",
                      transition: "background 0.3s"
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = "#4338ca"}
                    onMouseLeave={e => e.currentTarget.style.background = "#4f46e5"}
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

   {/* ===== Skills Section ===== */}
<section id="skills" style={{ padding: "5rem 2rem", background: "#f3f4f6" }}>
  <h2 style={{ textAlign: "center", marginBottom: "3rem", color: "#111827" }}>Skills</h2>

  {/* Technical Skills */}
  <div style={{ marginBottom: "3rem" }}>
    <h3 style={{ marginBottom: "2rem", color: "#4f46e5", textAlign: "center" }}>Technical Skills</h3>
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
      gap: "2rem",
      justifyItems: "center",
      alignItems: "center"
    }}>
      {[
        { name: "OS", img: "/images/os.png" },
        { name: "React", img: "/images/react.png" },
        { name: "Python", img: "/images/python.jpg" },
        { name: "CSS", img: "/images/css.png" },
        { name: "HTML", img: "/images/html.png" },
        { name: "Redux", img: "/images/redux.png" },
        { name: "Tailwind", img: "/images/tailwind.png" },
        { name: "Linux", img: "/images/linux.png" },
        { name: "MongoDB", img: "/images/mongodb.png" },
        { name: "Git", img: "/images/git.png" },
        { name: "Node Js", img: "/images/node.png" },
        { name: "C", img: "/images/c.png" },
        { name: "JAVA", img: "/images/java.png" },
        { name: "Github", img: "/images/github.png" },
        { name: "C++", img: "/images/cpp.png" },
        { name: "Express Js", img: "/images/express.png" },
        { name: "MySQL", img: "/images/mysql.jpg" },
        { name: "OOPs", img: "/images/oop.jpg" },
        { name: "JavaScript", img: "/images/javascript.png" },
        { name: "API", img: "/images/api.png" },
        { name: "EJS", img: "/images/ejs.png" },
        { name: "DSA", img: "/images/dsa.png" },
        { name: "Bootstrap", img: "/images/bootstrap.png" },
        { name: "JQuery", img: "/images/jquery.png" },
        { name: "Docker", img: "/images/docker.png" },
        { name: "Postman", img: "/images/postman.png" },
      
      ].map(skill => (
        <div key={skill.name} style={{
          textAlign: "center",
          transition: "transform 0.3s, box-shadow 0.3s",
          cursor: "pointer"
        }}
          onMouseEnter={e => e.currentTarget.style.transform = "translateY(-10px) scale(1.1)"}
          onMouseLeave={e => e.currentTarget.style.transform = "translateY(0) scale(1)"}
        >
          <div style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #f4f4feff, #ffffffff)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
            margin: "0 auto 0.5rem auto"
          }}>
            <img src={skill.img} alt={skill.name} style={{ width: "60%", height: "60%" }} />
          </div>
          <p style={{ fontWeight: "500", color: "#111827", fontSize: "0.9rem" }}>{skill.name}</p>
        </div>
      ))}
    </div>
  </div>
{/* Coursework */}
<div style={{ marginBottom: "3rem" }}>
  <h3 style={{ marginBottom: "2rem", color: "#ffffffff", textAlign: "center" }}>Coursework</h3>
  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "2rem",
    justifyItems: "center"
  }}>
    {[
      "DBMS",
      "SQL / MySQL",
      "DSA",
      "Operating System",
      "Computer Communications Network",
      "Object-Oriented Programming System",
      "JAVA"
    ].map(course => (
      <div key={course} style={{
        padding: "1rem 1.5rem",
        background: "linear-gradient(135deg, #ffffffff, #dededeff)",
        color: "#000000ff",
        fontWeight: "500",
        fontSize: "0.95rem",
        borderRadius: "15px",
        textAlign: "center",
        boxShadow: "0 6px 12px rgba(255, 255, 255, 0.2)",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer"
      }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.2)";
        }}
      >
        {course}
      </div>
    ))}
  </div>
</div>

 {/* Frameworks & Databases */}
<div style={{ marginBottom: "3rem" }}>
  <h3 style={{ marginBottom: "2rem", color: "#ffffffff", textAlign: "center" }}>Frameworks & Databases</h3>
  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "2rem",
    justifyItems: "center"
  }}>
    {[
      "React JS",
      "Next JS",
      "Bootstrap",
      "ExpressJS",
      "NodeJS",
      "MySQL",
      "MongoDB",
    ].map(skill => (
      <div key={skill} style={{
        padding: "1rem 1.5rem",
        background: "linear-gradient(135deg, #ffffffff, #4f46e5)",
        color: "#000000ff",
        fontWeight: "500",
        fontSize: "0.95rem",
        borderRadius: "15px",
        textAlign: "center",
        boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer"
      }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.2)";
        }}
      >
        {skill}
      </div>
    ))}
  </div>
</div>

  {/* Databases */}
<div style={{ marginBottom: "3rem" }}>
  <h3 style={{ marginBottom: "2rem", color: "#4f46e5", textAlign: "center" }}>Databases</h3>
  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "2rem",
    justifyItems: "center"
    }}>
      {["MySQL", "MongoDB", "SQLite"].map(db => (
      <div key={db} style={{
        padding: "1rem 1.5rem",
        background: "linear-gradient(135deg, #fcfcffff, #ffffffff)",
        color: "#000000ff",
        fontWeight: "500",
        fontSize: "1rem",
        borderRadius: "15px",
        textAlign: "center",
        boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer"
      }}onMouseEnter={e => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.2)";
        }}
      >
          {db}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ===== Testimonials Section ===== */}
      <section id="testimonials" style={{ padding: "5rem 2rem", background: "#e0e7ff", textAlign: "center" }}>
        <h2>Testimonials</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
          gap: "2rem",
          marginTop: "2rem"
        }}>
          <div style={{ background: "#fff", padding: "2rem", borderRadius: "15px", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}>
            <p>"Likhitha is an amazing developer. Her frontend skills are top-notch!"</p>
            <h4>- Colleague</h4>
          </div>
          <div style={{ background: "#fff", padding: "2rem", borderRadius: "15px", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}>
            <p>"Delivered our project with great efficiency and professionalism."</p>
            <h4>- Client</h4>
          </div>
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section id="contactus" style={{ padding: "5rem 2rem", background: "#f9fafb", textAlign: "center" }}>
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "2rem auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ padding: "0.8rem", borderRadius: "8px", border: "1px solid #d1d5db" }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ padding: "0.8rem", borderRadius: "8px", border: "1px solid #d1d5db" }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            style={{ padding: "0.8rem", borderRadius: "8px", border: "1px solid #d1d5db" }}
          />
          <button type="submit" style={{ padding: "0.8rem", background: "#4f46e5", color: "#fff", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>
            Send Message
          </button>
        </form>
        {status && <p style={{ color: "#6b7280", marginTop: "1rem" }}>{status}</p>}
      </section>

    </div>
  );
}
