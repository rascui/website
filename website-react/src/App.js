import './assets/css/style.css';
import HeaderNav from './components/HeaderNav';
import SectionHome from './components/SectionHome';
import SectionAbout from './components/SectionAbout';
import SectionServices from './components/SectionServices';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <SectionHome />
      <SectionAbout />
      <SectionServices />
    </div>
  );
}

export default App;
