import "./Projects.css";

const projects = [
  {
    name: "Breakout",
    description: "A classic Breakout arcade game built in Java. Features colorful brick layouts, score tracking, and smooth paddle/ball physics.",
    imgUrl: "/images/breakout.PNG",
    githubUrl: "https://github.com/yourusername/breakout",
    tags: ["Java", "OOP", "Game Dev"],
    type: "Academic Project",
  },
  {
    name: "World Cup 2018 Simulator",
    description: "A World Cup 2018 tournament simulator. Simulates group stages, knockouts, and generates match outcomes.",
    imgUrl: "/images/WC18.PNG",
    githubUrl: "https://github.com/yourusername/worldcup2018",
    tags: ["Python", "Simulation", "Data"],
    type: "Academic Project",
  },
  {
    name: "MyPresidentialElection",
    description: "An interactive U.S. Presidential Election modeling engine built in Python and Plotly. Simulates national and state-level vote swings with real-time Electoral College recalculation — exported as a fully standalone interactive HTML file.",
    imgUrl: "/images/WC18.PNG",
    githubUrl: "https://github.com/patrick141/MyPresidentialElection",
    tags: ["Python", "JavaScript","Simulation", "Data"],
    type: "Personal Project",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src={project.imgUrl} alt={project.name} />
        <span className="project-type-badge">{project.type}</span>
      </div>
      <div className="project-card-body">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="project-card-footer">
        <button
          className="project-github-btn"
          onClick={() => window.open(project.githubUrl, "_blank", "noopener,noreferrer")}
        >
          View on GitHub →
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p>A collection of personal and academic projects I've built and shipped.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;