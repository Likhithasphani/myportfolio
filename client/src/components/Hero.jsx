import React from "react";
import heroImage from "../assets/hero.jpg"; // replace with your image path

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "4rem 2rem",
        minHeight: "100vh",
        backgroundColor: "#fff",
        position: "relative",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Left Content */}
      <div style={{ maxWidth: "50%" }}>
        <p style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Hi There, I'm</p>
        <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem", color: "#111" }}>
          Dezven Indiana
        </h1>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#555" }}>
          Freelance Developer |
        </h2>
        <p style={{ marginBottom: "2rem", color: "#777", lineHeight: "1.6" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <button
          style={{
            backgroundColor: "#ff4500",
            color: "#fff",
            padding: "0.8rem 2rem",
            border: "none",
            borderRadius: "5px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Contact Me
        </button>
      </div>

      {/* Right Image */}
      <div
        style={{
          maxWidth: "45%",
          position: "relative",
        }}
      >
        <div
          style={{
            border: "5px solid #ff4500",
            borderRadius: "50% 50% 0 50%",
            padding: "0.5rem",
            display: "inline-block",
            overflow: "hidden",
          }}
        >
          <img
            src={heroImage}
            alt="Dezven"
            style={{
              width: "100%",
              display: "block",
              borderRadius: "50% 50% 0 50%",
            }}
          />
        </div>
      </div>
    </section>
  );
}
