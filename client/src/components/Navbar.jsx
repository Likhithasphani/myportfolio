import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "testimonials", "contactus"];
      const scrollPos = window.scrollY + 150;
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        background: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <div
        style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#4f46e5", cursor: "pointer" }}
        onClick={() => scrollToSection("home")}
      >
        LIKHITHA
      </div>

      {/* Desktop Menu */}
      <ul
        style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
          margin: 0,
        }}
      >
        {["home", "about", "projects", "skills", "testimonials", "contactus"].map((section) => (
          <li
            key={section}
            onClick={() => scrollToSection(section)}
            style={{
              cursor: "pointer",
              color: activeSection === section ? "#f97316" : "#111827",
              fontWeight: activeSection === section ? "bold" : "500",
              transition: "color 0.3s",
            }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1).replace("us", "")}
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "none",
          flexDirection: "column",
          gap: "5px",
          cursor: "pointer"
        }}
      >
        <span style={{ width: "25px", height: "3px", background: "#111827", borderRadius: "2px" }}></span>
        <span style={{ width: "25px", height: "3px", background: "#111827", borderRadius: "2px" }}></span>
        <span style={{ width: "25px", height: "3px", background: "#111827", borderRadius: "2px" }}></span>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            right: 0,
            background: "#fff",
            width: "200px",
            height: "calc(100% - 70px)",
            boxShadow: "-2px 0 10px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            zIndex: 999
          }}
        >
          {["home", "about", "projects", "skills", "testimonials", "contactus"].map((section) => (
            <div
              key={section}
              onClick={() => scrollToSection(section)}
              style={{
                padding: "1rem 0",
                cursor: "pointer",
                color: activeSection === section ? "#f97316" : "#111827",
                fontWeight: activeSection === section ? "bold" : "500"
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace("us","")}
            </div>
          ))}
        </div>
      )}

      <style>
        {`
          @media (max-width: 768px) {
            nav ul { display: none; }
            nav div[onClick] { display: flex; }
          }
        `}
      </style>
    </nav>
  );
}
