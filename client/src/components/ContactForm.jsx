import { useState } from "react";
import API from "../api";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    try {
      await API.post("/messages", { name, email, message });
      setSuccess("Message sent successfully!");
      setName(""); setEmail(""); setMessage("");
    } catch (err) {
      alert("Error sending message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      {success && <p className="text-green-600 mb-4">{success}</p>}
      <form className="flex flex-col space-y-4 max-w-lg" onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required className="p-3 border rounded"/>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required className="p-3 border rounded"/>
        <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Message" required className="p-3 border rounded h-32"/>
        <button type="submit" disabled={loading} className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition">
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
