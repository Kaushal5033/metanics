
import Header from './components/Header';
import Hero from './components/Hero';
// import headbg from './assets/headbg.png';

function App() {
  return (
    <div>
      {/* <div className="bg-aspire-dark bg-cover text-white bg-slate-500 min-h-screen bg-[url('./assets/headbg.jpg')]"> */}
      <div style="width:100%;height:0;padding-bottom:100%;position:relative;">
        <iframe src="https://giphy.com/embed/l5JbspfwZ0yjHjlJ0K" width="100%" height="100%" style="position:absolute" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;
