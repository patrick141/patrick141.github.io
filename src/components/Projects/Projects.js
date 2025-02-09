import SlideShow from "./SlideShow";
import "./Projects.css";

const slides = [
  {
    name: "Breakout",
    description: "A breakout game",
    imgUrl: "/images/breakout.PNG",
    width: 200,
    height: 200
  },
  {
    name: "World Cup 2018 simulator",
    description: "A world cup 2018 simulator",
    imgUrl: "/images/WC18.PNG",
    width: 1000,
    height: 600
  },
];

const Projects = () => {
  return (
    <div className="projects-section">
      <h2>My Projects</h2>
      <SlideShow slides={slides} />
    </div>
  );
};

export default Projects;
