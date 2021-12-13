import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Landing from './Components/Landing/Landing';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Landing/>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
