import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* ── Left: Bio ── */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi! I'm <strong>Patrick Amaro</strong>, a software engineer based in
            <strong> Charlotte</strong> with a passion for building clean,
            performant, and user-friendly web experiences.
          </p>
          <p>
            I specialize in front-end development, with experience spanning
            everything from crafting pixel-perfect UIs to integrating complex
            APIs. I love turning ideas into products that people actually enjoy
            using.
          </p>
          <p>
            Outside of engineering I'm also a musician and a proud dog parent
            — both of which keep me creative and grounded.
          </p>

          <div className="about-actions">
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </div>
        </div>

        {/* ── Right: Tech Stack ── */}
        <div className="about-skills">
          <h3>Technologies</h3>
          <div className="skills-grid">
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
              <span>JavaScript</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
              <span>React</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
              <span>HTML5</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
              <span>CSS3</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
              <span>Node.js</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
              <span>Python</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
              <span>Git</span>
            </div>
            <div className="skill-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="AWS" />
              <span>AWS</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;