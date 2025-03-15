
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Project from './Components/Projects/Project';
import Skills from './Components/Skills/Skills';
import Footer from './Components/Footer';
import './output.css'
import Work from './Components/Work';

function App() {
  return (
    <div className="App bgimg bg-[#163031] "> 
     <Header />
     <Hero />
     <About />
     <Skills />
     <Work />
     <Project />
      <Footer />
    </div>
  );
}

export default App;
