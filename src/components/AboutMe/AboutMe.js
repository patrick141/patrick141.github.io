import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="image-container">
        <img src="/images/Patrick.png" alt="Patrick" />
      </div>
      <div className="text-container">
        <h1>Patrick Amaro</h1>
        <h3>Software Engineer, Musician and Dog Parent</h3>
        <h4>
          I am a software engineer, specializing in front end. Checkout my
          project to learn about my work.
        </h4>
      </div>
    </div>
  );
};

export default AboutMe;
