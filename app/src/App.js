import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import { useSelector, useDispatch } from "react-redux";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";



function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="flex flex-col gap-8">
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
        <Footer />
      </div>


    </div>
  );
}

export default App;
