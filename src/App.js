import "./App.css";
import "./styles.css";
import NavBar from "./components/NavBar/NavBar";
import { UNDER_MODIFICATION } from "./constants";
import ContactMe from "./components/ContactMe/ContactMe";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      {UNDER_MODIFICATION && (
        <div className="under-modification-banner">
          🚧 Site is currently under construction — check back soon!
        </div>
      )}
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <ContactMe />
      </div>
    </div>
  );
}

export default App;