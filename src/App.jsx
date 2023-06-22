import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
