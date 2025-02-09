import React, { useState } from "react";
import { sendContact } from "../../network/apis";
import { isValidEmail } from "./utils";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const CHARACTER_LENGTH = 40;
  const MESSAGE_LENGTH = 100;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      alert("Please enter valid email");
      return;
    }
    let data = {
      name,
      email,
      message,
    };
  };

  return (
    <div className="contact-me">
      <form onSubmit={onSubmit}>
        <h2>Contact Me</h2>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={CHARACTER_LENGTH} 
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxLength={CHARACTER_LENGTH} 
        />
        <label htmlFor="message">Message</label>
        <input
          type="text"
          id="message"
          className="form-control"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={MESSAGE_LENGTH} 
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default ContactMe;
