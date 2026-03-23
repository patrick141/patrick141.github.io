import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-name">Patrick Amaro</p>
        <div className="footer-links">
          <button
            className="footer-icon-btn"
            onClick={() => window.open("https://github.com/patrick141", "_blank", "noopener,noreferrer")}
            aria-label="GitHub"
          >
            <FaGithub />
          </button>
          <button
            className="footer-icon-btn"
            onClick={() => window.open("https://www.linkedin.com/in/patrick-amaro-rivera-5134a0126/", "_blank", "noopener,noreferrer")}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </button>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Patrick Amaro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;