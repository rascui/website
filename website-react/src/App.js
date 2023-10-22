import logo from './logo.svg';
import './App.css';
import './assets/css/style.css';
import Head from './components/Head';
import HeaderNav from './components/HeaderNav';
import SectionHome from './components/SectionHome';

function App() {
  return (
    <div className="App">
      <Head />
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
        <HeaderNav />
      </header>
      <SectionHome />
    </div>
  );
}

export default App;
