import './assets/css/style.css';
import PageHeader from './components/PageHeader';
import SectionHome from './components/SectionHome';
import SectionAbout from './components/SectionAbout';
import SectionServices from './components/SectionServices';

function App() {
  return (
    <div className="App">
      <PageHeader />
      <SectionHome />
      <SectionAbout />
      <SectionServices />
    </div>
  );
}

export default App;
