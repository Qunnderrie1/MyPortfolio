import React from "react";
import rocket from "../Images/Rockets.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  return (
    <div className="container relative  mt-40 ">
      <div className="absolute left-0 w-0.5 h-60 bg-[#f2fb00] max-xl:hidden"></div>

      <div className="flex justify-between max-sm:text-center max-xl:justify-center ">
        <div className="text-left px-10 max-xl:text-center max-xl:px-0">
          <p className="animate-[moveHeroText_2s] text-left text-xl text-white max-xl:text-center">
            Hello!
          </p>
          <h1 className="animate-[moveHeroText_2s] text-8xl text-white font-bold max-xl:text-6xl">
            I AM A{" "}
            <span className="text-[#f2fb00] block max-xl:text-6xl">
              WEB DEVELOPER
            </span>
          </h1>
          <p className="animate-[moveHeroText_3s] text-white text-xl mt-2 max-md:text-base  max-sm:text-base">
            Passionate Creator and Problem Solver | Turning ideas into Reality
            with Code.
          </p>
          <div className="flex  gap-10 mt-14 max-xl:flex-col max-lg:py-4 xl:absolute  ">
            <a href="/Q_Snelling_Resume.pdf" download>
              <button className="bg-[#f2fb00] animate-[moveResumeBtn_2s] rounded font-bold py-2 max-lg:w-40 m-auto sm:w-40 ">
                RESUME CV <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </a>
            <a
              href="#portfolio"
              className="  animate-[moveWorkBtn_2s] text-[#f2fb00] text-xl"
            >
              My Work <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>

        <div className="max-xl:hidden px-20">
          <img src={rocket} alt="rockets" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
