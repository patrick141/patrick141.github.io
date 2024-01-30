import './App.css';
import './styles.css'
import TopBanner from './components/TopBanner';
import NavBar from './components/NavBar';
import { UNDER_MODIFICATION } from './constants';

function App() {
  return (
    <div className="App">
            <TopBanner message={UNDER_MODIFICATION} />
      <NavBar />
      <img className="my-image" src="/images/Patrick.png" alt='Patrick'/>
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