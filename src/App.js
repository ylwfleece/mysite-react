import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path={"/"}
          element={
            <>
              <Main />
              <About />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route
          path={"/main"}
          element={
            <>
              <Main />
              <About />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route
          path={"/projects"}
          element={
            <>
              <Projects />
            </>
          }
        />
        <Route
          path={"/contact"}
          element={
            <>
              <Contact />
            </>
          }
        />
        <Route
          path={"/about"}
          element={
            <>
              <About />
            </>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
