import "./AboutMe.css";
import { GITHUB_URL, LINKEDIN_URL } from "../../constants";

const SKILLS = [
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
];

const SkillItem = ({ name, icon }) => (
  <div className="skill-item">
    <img src={icon} alt={name} />
    <span>{name}</span>
  </div>
);

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
            I have <strong>3-4 years of experience</strong> building
            web applications, internal tools, and mobile apps across the full stack.
            My strongest area is <strong>front-end development with React</strong>, where
            I focus on crafting clean, responsive, and performant user interfaces.
          </p>
          <p>
            I've worked across a broad range of environments, from customer-facing
            web apps to IT support and backend APIs, which gives me a well-rounded
            perspective on how software fits into real business needs. I'm comfortable
            picking up new tools quickly and working across teams to ship products
            that actually solve problems.
          </p>
          <p>
            Outside of engineering I'm also a musician and a proud dog parent.
            Both keep me creative, patient, and grounded.
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
            {SKILLS.map((skill) => (
              <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;