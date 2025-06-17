import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import { useSelector, useDispatch } from "react-redux";
import Skills from "./Components/Skills";

function App() {
  const isOpen = useSelector((state) => state.isOpen.value);
  const dispatch = useDispatch();

  return (
    <div className={`bg-black`}>
      <Navbar />
      <div className="container mx-auto">
        <Hero />
      </div>
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
