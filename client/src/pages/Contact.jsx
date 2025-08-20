import React, { useState } from "react";
import { sendMessage } from "../api"; // your API call

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendMessage(form);
      setStatus("Message sent! ✅");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("Error sending message ❌");
    }
  };

  return (
    <section id="contactus" style={{ padding: "5rem 2rem", backgroundColor: "#f3f4f6" }}>
      <h2 style={{ textAlign: "center", color: "#4f46e5" }}>Contact Us</h2>
      <p style={{ textAlign: "center", maxWidth: "700px", margin: "1rem auto" }}>
        Get in touch for projects or collaborations
      </p>

      <form onSubmit={handleSubmit} style={{
        maxWidth: "500px",
        margin: "2rem auto",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        backgroundColor: "#fff",
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ padding: "0.7rem", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ padding: "0.7rem", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
          rows="5"
          style={{ padding: "0.7rem", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <button type="submit" style={{
          backgroundColor: "#4f46e5",
          color: "#fff",
          padding: "0.7rem",
          borderRadius: "5px",
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          Send Message
        </button>
        {status && <p style={{ textAlign: "center", color: "#10b981" }}>{status}</p>}
      </form>
    </section>
  );
}
