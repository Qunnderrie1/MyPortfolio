import React from "react";
import rocket from "../Images/Rockets.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowUpRightFromSquare, faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import gitHubImage from "../Images/github.png";
import linkedinImage from "../Images/linkedin.png";
const Hero = () => {
  return (
    <div className="container relative  mt-40 ">
      <div className="absolute left-0 w-0.5 h-60 bg-[#f2fb00] max-xl:hidden"></div>
      <div className="flex justify-between max-sm:text-center max-xl:justify-center ">
        <div className="text-left px-10 max-xl:text-center max-xl:px-0">
          <p className="animate-[moveHeroText_2s] lg:text-left text-xl text-black bg-[#f2fb00] py-2 w-fit m-auto px-4 rounded-br-lg rounded-tl-lg  ">
            Hello! I am Qunnderrie
          </p>
          <h1 className="animate-[moveHeroText_2s] text-8xl text-white font-bold max-xl:text-6xl">
            A Full Stack{" "}WEB
            <span className="text-[#f2fb00] block max-xl:text-6xl">
              DEVELOPER
            </span>
          </h1>
          <div className="flex justify-center lg:justify-start lg:px-0  gap-10 mt-14 items-center  ">
            <a href="/Qunnderrie_Software_Engineer.pdf" download>
              <button className="text-[#f2fb00] animate-[moveResumeBtn_2s]   py-1 max-lg:w-40 m-auto text-[18px] border-b-[1.5px] border-b-[#f2fb00] ">
                Resume CV <FontAwesomeIcon icon={faSquareArrowUpRight} />
              </button>
            </a>
            <a
              href="#portfolio"
              className="  animate-[moveWorkBtn_2s] text-[#f2fb00] text-[18px]  border-b-[1.5px] border-b-[#f2fb00] p-1"
            >
              My Work <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </a>
          </div>
        </div>
        <div className="max-xl:hidden px-20">
          <img src={rocket} alt="rockets" />
        </div>
      </div>

      <div className="flex justify-center gap-8 mt-[100px] xl:justify-start px-10 ">
        <a className="text-xl text-white" href="https://github.com/Qunnderrie1">
          <img src={gitHubImage} className="w-[40px]" alt="github" />
        </a>
        <a
          className="text-xl text-white"
          href="https://www.linkedin.com/in/qunnderrie/"
        >
          <img src={linkedinImage} className="w-[40px]" alt="github" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
