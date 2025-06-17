import React from "react";
import rocket from "../Images/Rockets.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowUpRightFromSquare, faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import linkedin from '../Images/linkedin-icon.png';
import github from '../Images/github-icon.png';
const Hero = () => {
  return (
    <div className="container relative  mt-40 ">
      <div className="flex justify-between max-sm:text-center max-xl:justify-center ">
        <div className="text-left px-10 max-xl:text-center max-xl:px-0">
          <p className="animate-[moveHeroText_2s] text-left max-lg:m-auto text-xl text-black bg-[#f2fb00] py-2 w-fit px-4 rounded-br-lg rounded-tl-lg">
            Hello! I am Qunnderrie
          </p>
          <h1 className="animate-[moveHeroText_2s] text-5xl text-white font-bold max-xl:text-6xl">
            A Full Stack{" "}WEB
            <span className="text-[#f2fb00] block max-xl:text-5xl">
              DEVELOPER
            </span>
          </h1>
          <div className="flex justify-center lg:justify-start lg:px-0  gap-10 mt-14 items-center  ">
            <a href="./Qunnderrie_Software_Engineer_2025.pdf" download>
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

      <p className=" mt-[100px] text-center md:text-center  text-white font-normal lg:text-left px-10">Follow On Social Media</p>
      <div className="flex justify-center gap-8 mt-[20px]  px-10 ">

        <a className="text-xl text-white border-2 border-white rounded-full p-2" href="https://github.com/Qunnderrie1">
          <img src={github} className="w-[30px]" alt="github" />
        </a>
        <a
          className="text-xl text-white border-2 border-white rounded-full p-2"
          href="https://www.linkedin.com/in/qunnderrie/"
        >
          <img src={linkedin} className="w-[30px]" alt="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
