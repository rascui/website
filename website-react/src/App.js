import './assets/css/style.css';
import HeaderNav from './components/HeaderNav';
import SectionHome from './components/SectionHome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderNav />
      </header>
      <SectionHome />
    </div>
  );
}

export default App;
