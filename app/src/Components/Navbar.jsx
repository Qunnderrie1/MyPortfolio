import React from "react";
import MobileNavbar from "./MobileNavbar";
import { useSelector, useDispatch } from "react-redux";
import { openNav, closeNav } from "../Slices/NavOpenSlice";

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
              className={`w-10 h-1 rounded bg-[#f2fb00] ${
                isOpen
                  ? "rotate-45 mb-[-12px] transition ease-in-out "
                  : "bg-[#f2fb00]"
              }`}
            ></div>
            <div
              className={`w-10 h-1 rounded bg-[#f2fb00] ${
                isOpen ? "hidden" : "bg-[#f2fb00]"
              }`}
            ></div>
            <div
              className={`w-10 h-1 rounded bg-[#f2fb00] ${
                isOpen
                  ? "-rotate-45 mb-[28px]  transition ease-in-out"
                  : "bg-[#f2fb00]"
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
        <p className="z-1 bg-[#f2fb00] rounded text-black font-bold border-none w-fit p-2">
          QS
        </p>
        <div className="flex gap-10">
          <a className="text-[#f2fb00] font-bold" href="#home">
            HOME
          </a>
          <a className="text-white" href="#portfolio">
            PORTFOLIO
          </a>
          <a className="text-white " href="#about">
            ABOUT
          </a>
          <a className="text-white " href="#contact">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
