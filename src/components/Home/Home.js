import "./Home.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home">
      <div className="home-image-container">
        <img src="/images/Patrick.png" alt="Portrait of Patrick" fetchpriority="high"/>
      </div>
      <div className="home-text-container">
        <h1>Patrick Amaro</h1>
        <h3>Software Engineer · Musician · Dog Parent</h3>
        <p>
          I'm a software engineer specializing in front-end development.
          Check out my projects to see what I've been building.
        </p>
        <div className="home-cta-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
          <div className="home-social-links">
            <button
              className="social-icon-btn"
              onClick={() => window.open("https://github.com/patrick141", "_blank", "noopener,noreferrer")}
              aria-label="GitHub"
            >
              <FaGithub />
            </button>
            <button
              className="social-icon-btn"
              onClick={() => window.open("https://www.linkedin.com/in/patrick-amaro-rivera-5134a0126/", "_blank", "noopener,noreferrer")}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;