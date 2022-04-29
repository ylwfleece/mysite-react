import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact={true}>
            <Main />
            <About />
            <Projects />
            <Contact />
          </Route>
          <Route path="/main" exact={true}>
            <Main />
            <About />
            <Projects />
            <Contact />
          </Route>
          <Route path="/about" exact={true}>
            <About />
          </Route>
          <Route path="/projects" exact={true}>
            <Projects />
          </Route>
          <Route path="/contact" exact={true}>
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
