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
      <Routes>
        <Route path={'/'} element={<><NavBar /><Main /><About /><Projects /><Contact /><Footer /></>} />
        <Route path={'/main'} element={<><NavBar /><Main /><About /><Projects /><Contact /><Footer /></>} />
        <Route path={'/projects'} element={<><NavBar /><Projects /><Footer /></>} />
        <Route path={'/contact'} element={<><NavBar /><Contact /><Footer /></>} />
       
      </Routes>
    </BrowserRouter>
  );
}

// function App() {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route exact path={"/"}>
//           <NavBar />
//           <Main />
//           <About />
//           <Projects />
//           <Contact />
//           <Footer />
//         </Route>
//         <Route exact path={"/main"}>
//           <NavBar />
//           <Main />
//           <About />
//           <Projects />
//           <Contact />
//           <Footer />
//         </Route>
//         <Route exact path={"/about"}>
//           <NavBar />
//           <About />
//           <Footer />
//         </Route>
//         <Route exact path={"/projects"}>
//           <NavBar />
//           <Projects />
//           <Footer />
//         </Route>
//         <Route exact path={"/contact"}>
//           <NavBar />
//           <Contact />
//           <Footer />
//         </Route>
//       </Switch>
//     </BrowserRouter>
//   );
// }

export default App;
