import './App.css';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
