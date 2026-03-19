import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills"; 
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Achievements />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;