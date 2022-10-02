import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { MyFooter } from "./components/MyFooter";
import Skills from "./components/Skills";

function App() {
  return (
    <>
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <MyFooter />
    </>
  );
}

export default App;
