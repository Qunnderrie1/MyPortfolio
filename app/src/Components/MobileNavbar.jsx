import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeNav } from "../Slices/NavOpenSlice";
import gitHubImage from "../Images/github.png";
import linkedinImage from "../Images/linkedin.png";
import { Link } from "react-router-dom";

const MobileNavbar = ({ open }) => {
  const body = document.getElementById("body");
  const isOpen = useSelector((state) => state.isOpen.value);
  const dispatch = useDispatch();

  const handleMobileNav = () => {
    // Close mobile menu when user click on link
    dispatch(closeNav());
    // Set overflow back to auto after user click on link
    body.style.overflow = "auto";
  };

  return (
    <div className="">
      {/* ============== Mobile Navbar Container ============== */}
      <div
        className={`animate-[moveMobileNav_0.3s_ease-in-out] h-screen w-screen flex justify-center items-center bg-black z-2 absolute top-0 p-0 m-0 ${isOpen ? "visible " : "hidden "
          }`}
      >
        <div className="flex flex-col justify-center items-center  gap-10">
          <Link to="/"
            onClick={handleMobileNav}
            className="animate-[moveMobileMenuText_1s_ease-in-out] text-purple-500 font-normal  text-xl"
            href="#home"
          >
            Home
          </Link>
          <Link to="/portfolio"
            onClick={handleMobileNav}
            className="animate-[moveMobileMenuText_1.3s_ease-in-out] text-white text-xl"
            href="#portfolio"
          >
            Portfolio
          </Link>
          <Link to="/skills"
            onClick={handleMobileNav}
            className="animate-[moveMobileMenuText_1.6s_ease-in-out] text-white text-xl "
            href="#about"
          >
            Skills
          </Link>
          <Link to="/about"
            onClick={handleMobileNav}
            className="animate-[moveMobileMenuText_1.6s_ease-in-out] text-white text-xl "
            href="#about"
          >
            About
          </Link>
          <Link to="/contact"
            onClick={handleMobileNav}
            className="animate-[moveMobileMenuText_1.9s_ease-in-out] text-white text-xl "
            href="#contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
