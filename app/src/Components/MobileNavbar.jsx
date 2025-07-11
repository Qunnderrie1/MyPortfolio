import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeNav } from "../Slices/NavOpenSlice";

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
          <a
            onClick={handleMobileNav}
            className="animate-[moveMobileMenuText_1s_ease-in-out] text-purple-500 font-normal  text-xl"
            href="#home"
          >
            Home
          </a>
          <a
            onClick={handleMobileNav}
            className="animate-[moveMobileMenuText_1.3s_ease-in-out] text-white text-xl"
            href="#portfolio"
          >
            Portfolio
          </a>
          <a
            onClick={handleMobileNav}
            className="animate-[moveMobileMenuText_1.6s_ease-in-out] text-white text-xl "
            href="#about"
          >
            Skills
          </a>
          <a
            onClick={handleMobileNav}
            className="animate-[moveMobileMenuText_1.6s_ease-in-out] text-white text-xl "
            href="#about"
          >
            About
          </a>
          <a
            onClick={handleMobileNav}
            className="animate-[moveMobileMenuText_1.9s_ease-in-out] text-white text-xl "
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>
    </div >
  );
};

export default MobileNavbar;
