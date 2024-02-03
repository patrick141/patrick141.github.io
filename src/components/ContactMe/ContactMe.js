import { useState } from "react";
import { sendContact } from "../../network/apis";
import { isValidEmail } from "./utils";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = (e) => {
    // TODO: implement functionality
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
    sendContact(data);
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
        />
        <label htmlFor="name">Email</label>
        <input
          type="text"
          id="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="name">Message</label>
        <input
          type="text"
          id="message"
          className="form-control"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default ContactMe;
