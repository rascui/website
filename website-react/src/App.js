import './assets/css/style.css';
import PageOverlay from './components/PageOverlay/PageOverlay';
import PageHeader from './components/PageHeader/PageHeader';
import PageFooter from './components/PageFooter/PageFooter';
import PageProgress from './components/PageProgress/PageProgress';
import SectionHome from './components/SectionHome/SectionHome';
import SectionAbout from './components/SectionAbout/SectionAbout';
import SectionServices from './components/SectionServices/SectionServices';
import SectionPortfolio from './components/SectionPortfolio/SectionPortfolio';
import SectionBlog from './components/SectionBlog/SectionBlog';
import SectionStats from './components/SectionStats/SectionStats';

function App() {
  return (
    <div className="App">
      <PageOverlay />
      <PageHeader />
      <SectionHome />
      <SectionAbout />
      <SectionServices />
      <SectionPortfolio />
      <SectionBlog />
      <SectionStats />
      <PageFooter />
      <PageProgress />
    </div>
  );
}

export default App;
