import React from "react";
import MobileNavbar from "./MobileNavbar";
import { useSelector, useDispatch } from "react-redux";
import { openNav, closeNav } from "../Slices/NavOpenSlice";
import gitHubImage from "../Images/github.png";
import linkedinImage from "../Images/linkedin.png";
import linkedin from '../Images/linkedin-icon.png';
import github from '../Images/github-icon.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  const body = document.getElementById("body");
  const isOpen = useSelector((state) => state.isOpen.value);
  const dispatch = useDispatch();

  // Open Mobile Menu
  const OpenMobileNav = () => {
    if (isOpen) {
      dispatch(closeNav());
      console.log(isOpen);
      body.style.overflow = "auto";
    } else {
      dispatch(openNav());
      console.log(isOpen);
      body.style.overflow = "hidden";
    }
  };

  return (
    <nav className="relative">
      <MobileNavbar />
      {/* ============== Hamburger Mobile Container ============== */}
      <div onClick={OpenMobileNav} className=" xl:hidden ">
        <div className="flex  justify-between px-2">
          <div className="flex absolute right-8  top-12 z-2 flex-col gap-2">
            <div
              className={`w-10 h-1 rounded bg-purple-500 ${isOpen
                ? "rotate-45 mb-[-12px] transition ease-in-out "
                : "bg-bg-purple-500"
                }`}
            ></div>
            <div
              className={`w-10 h-1 rounded bg-purple-500 ${isOpen ? "hidden" : "bg-purple-500"
                }`}
            ></div>
            <div
              className={`w-10 h-1 rounded bg-purple-500 ${isOpen
                ? "-rotate-45 mb-[28px]  transition ease-in-out"
                : "bg-bg-purple-500"
                }`}
            ></div>
          </div>
        </div>
      </div>

      {/* ============= desktop NavBar ==============*/}
      <div
        id="home"
        className="flex py-4 justify-between container max-xl:invisible "
      >
        <div className="flex flex-row-reverse gap-20">
          <div className="flex justify-center gap-8  ">

            <a className="text-xl text-white  " href="https://github.com/Qunnderrie1">
              <img src={github} className="w-[25px]" alt="github" />
            </a>
            <a
              className="text-xl text-white   "
              href="https://www.linkedin.com/in/qunnderrie/"
            >
              <img src={linkedin} className="w-[25px]" alt="linkedin" />
            </a>
          </div>
          <p className="z-1 rounded text-white font-normals border-none w-fit ">
            Qunnderrie <span className="text-purple-600 text-xl font-semibold">Portfolio</span>
          </p>
        </div>


        <div className="flex gap-10">
          <Link to="/" className="text-purple-500 font-bold" href="#home">
            Home
          </Link>
          <Link to="/portfolio" className="text-white" href="#portfolio">
            Portfolio
          </Link>
          <Link to="/about" className="text-white " href="#about">
            About
          </Link>
          <Link to="/contact" className="text-white " href="#contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
