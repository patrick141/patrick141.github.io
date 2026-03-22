import "./ContactMe.css";
import React, { useState } from "react";
import { sendContact } from "../../network/apis";
import { isValidEmail } from "./utils";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const CHARACTER_LENGTH = 40;
  const MESSAGE_LENGTH = 300;

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // ── Honeypot: if filled, silently reject (bot detected) ──
    if (honeypot) return;

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!message.trim()) {
      setError("Please enter a message.");
      return;
    }

    setLoading(true);
    try {
      await sendContact({ name, email, message });
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="contact-section">
        <div className="contact-card">
          <div className="contact-success">
            <span className="contact-success-icon">✅</span>
            <h2>Message Sent!</h2>
            <p>
              Thanks for reaching out, <strong>{name}</strong>. I'll get back
              to you soon.
            </p>
            <button
              className="contact-btn"
              onClick={() => {
                setSubmitted(false);
                setName("");
                setEmail("");
                setMessage("");
              }}
            >
              Send Another
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-section">
      <div className="contact-card">
        <div className="contact-header">
          <h2>Contact Me</h2>
          <p>
            Have a question, opportunity, or just want to say hi? I'd love to
            hear from you.
          </p>
        </div>

        {error && <div className="contact-error">{error}</div>}

        <form onSubmit={onSubmit} className="contact-form">

          {/* ── Honeypot: hidden from humans, bots fill this ── */}
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Jane Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={CHARACTER_LENGTH}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="jane@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={CHARACTER_LENGTH}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={MESSAGE_LENGTH}
              rows={5}
            />
            <span className="char-count">
              {message.length} / {MESSAGE_LENGTH}
            </span>
          </div>

          <button type="submit" className="contact-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;