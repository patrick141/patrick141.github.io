import "./App.css";
import "./styles.css";
import NavBar from "./components/NavBar/NavBar";
import { UNDER_MODIFICATION } from "./constants";
import ContactMe from "./components/ContactMe/ContactMe";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <h3>{UNDER_MODIFICATION}</h3>
      <NavBar />
      <div>
        <Home />
      </div>
      <div id="about">{/* <AboutMe />*/}</div>
      <div id="contact">
        <ContactMe />
      </div>
    </div>
  );
}

export default App;

/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/
