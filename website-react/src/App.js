import './assets/css/style.css';
import Head from './components/Head';
import HeaderNav from './components/HeaderNav';
import SectionHome from './components/SectionHome';

function App() {
  return (
    <div className="App">
      <Head />
      <header className="App-header">
        <HeaderNav />
      </header>
      <SectionHome />
    </div>
  );
}

export default App;
