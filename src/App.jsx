import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink transition-colors duration-300">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-ink"
      >
        Skip to content
      </a>

      <Header />

      <main>
        <Hero />
        <About />
        <Projects />
        <Achievements />
      </main>

      <Contact />
    </div>
  );
}

export default App;
