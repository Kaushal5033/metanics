import Header from './components/Header';
import Hero from './components/Hero';
import LandAbout from './components/Land-About';
import LandServices from './components/land-Services';
import LandCounting from './components/Land-Counting';
import LandChoose from './components/Land-choose';
import LandBrand from './components/Land-Brand';
// import headbgImage from './assets/headbg.png';

function App() {
  return (
    <div>
      <div className="w-full h-screen bg-cover bg-black bg-center relative">
        <Header />
        <Hero />
        <LandAbout />
        <LandServices />
        <LandCounting />
        <LandChoose />
        <LandBrand />
      </div>
    </div>
  );
}

export default App;
