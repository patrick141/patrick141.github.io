import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home-image-container">
        <img src="/images/Patrick.png" alt="Portrait of Patrick" />
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
        </div>
      </div>
    </section>
  );
};

export default Home;