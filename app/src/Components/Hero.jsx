import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowUpRightFromSquare, faComputer, faDownload, faEnvelope, faMobileAndroid, faPen, faPenFancy, faPhone, faSquareArrowUpRight, faWebAwesome } from "@fortawesome/free-solid-svg-icons";
import '../App.css'
const Hero = () => {
  return (
    <div id="home" className="hero flex  flex-col w-full container relative justify-center items-center  ">
      <div className=" flex text-center w-full max-xl:flex-col max-xl:justify-center ">
        <div className="flex flex-col items-center justify-center text-center mt-[200px] max-w-[800px] mx-auto ">
          <p className="animate-[moveHeroText_2s]  text-4xl text-white font-light max-sm:text-center  ">
            Building Digital
          </p>

          <h1 className=" bg-clip-text text-transparent bg-gradient-to-r from-purple-500  to-red-500  animate-[moveHeroText_2s] text-left text-6xl  font-bold max-xl:text-5xl leading-snug max-sm:text-center max-sm:text-4xl ">
            Solutions With Code.
          </h1>
          <p className="animate-[moveHeroText_5s] text-white  leading-[50px] text-xl font-light">From concept to code. Let's Create <span className="font-normal text-purple-500 text-2xl" >Something Great.</span></p>
          <div className=" lg:justify-start lg:px-0  mt-14 items-center w-full mx-auto  ">
            <div className="flex  items-center justify-center gap-8 max-sm:flex-col ">
              <a href="./Qunnderrie_Full_Stack_Developer.pdf" download>
                <button className="text-white animate-[moveResumeBtn_2s]  py-1 max-lg:w-60 w-[180px]  text-[18px]  bg-purple-500  ">
                  <FontAwesomeIcon icon={faDownload} /> Download CV
                </button>

              </a>
            </div>

          </div>
        </div>
      </div>


      {/* ==============================  PORTFOLIO  ============================= */}


    </div>
  );
};

export default Hero;
