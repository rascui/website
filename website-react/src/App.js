import './assets/css/style.css';
import HeaderNav from './components/HeaderNav';
import SectionHome from './components/SectionHome';
import SectionAbout from './components/SectionAbout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderNav />
      </header>
      <SectionHome />
      <SectionAbout />
    </div>
  );
}

export default App;
