import React, { useState } from "react";
import mortgageCalculator from "../Images/mortgageCalculator_mockup.png";
import portfolioImage from "../Images/portfolio_mockup.png";
import jobTrackerImage from "../Images/jobtracker_mockup.png";
import { InView } from "react-intersection-observer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Portfolio = () => {
  const [hasTriggered, setHasTriggered] = useState(false);

  const handlePortfolioView = (inView) => {
    if (inView) {
      setHasTriggered(true);
    }
  };
  return (
    <div id="portfolio" className=" container mt-40 mx-auto bg-[#000000]">
      <div className="">
        <h1 className="text-white text-left max-md:text-center text-[30px] font-normal">
          <span className="text-purple-500">My</span>Projects
        </h1>

        <InView
          onChange={(inView) => handlePortfolioView(inView)}
          triggerOnce={true}
        >
          <div
            className={`flex gap-4 mt-16 max-md:justify-center mx-auto max-lg:flex-wrap ${hasTriggered ? "animate-[moveSkillCardOne_1s]" : "animate-none"
              }`}
          >
            <div className="card border-none w-[360px] h-fit bg-[#171717] text-white">
              <img
                className=" w-[360px] img-fluid  object-contain "
                src={mortgageCalculator}
                alt="mortgage Calculator"
              />
              <div className="card-title py-4 container">
                <p className="mt-2 text-[18px] text-left font-normal">
                  Mortgage Calculator
                </p>
                <div className="card-body px-0 text-center">
                  <p className="text-left font-light text-[14px]">Device Support: Web and Mobile Browsers</p>
                  <p className="text-left text-[14px]">Role: Frontend Developer</p>
                </div>
                <div className="flex  bg-[#171717] px-0   ">
                  <a
                    className="font-normal p-2 text-white "
                    href="https://qunnderrie1.github.io/MortgageCalculatorApp/"
                  >
                    Live Demo <FontAwesomeIcon icon={faArrowCircleRight} className="px-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="card border-none w-[360px] h-fit bg-[#171717] text-white">
              <img
                className=" w-[360px] img-fluid  object-contain "
                src={portfolioImage}
                alt="mortgage Calculator"
              />
              <div className="card-title py-4 container">
                <p className="mt-2 text-[18px] text-left font-normal">
                  Portfolio Website
                </p>
                <div className="card-body px-0 text-center">
                  <p className="text-left font-light text-[14px]">Device Support: Web and Mobile Browsers</p>
                  <p className="text-left text-[14px]">Role: Frontend Developer</p>
                </div>
                <div className=" flex bg-[#171717] px-0  ">
                  <a
                    className="font-normal p-2 text-white "
                    href="https://qunnderrie1.github.io/MyPortfolio/"
                  >
                    Live Demo <FontAwesomeIcon icon={faArrowCircleRight} className="px-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="card border-none w-[360px] h-fit bg-[#171717] text-white">
              <img
                className=" w-[360px] img-fluid  object-contain "
                src={jobTrackerImage}
                alt="mortgage Calculator"
              />
              <div className="card-title py-4 container">
                <p className="mt-2 text-[18px] text-left font-normal">
                  Job Tracker
                </p>
                <div className="card-body px-0 text-center">
                  <p className="text-left font-light text-[14px]">Device Support: Web and Mobile Browsers</p>
                  <p className="text-left text-[14px]">Role: Full Stack Developer</p>
                </div>
                <div className=" flex  bg-[#171717] px-0   ">
                  <a
                    className="font-normal p-2 text-white "
                    href="https://jobtrackerwebapp.onrender.com/"
                  >
                    Live Demo <FontAwesomeIcon icon={faArrowCircleRight} className="px-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </InView>
      </div>
    </div>
  );
};

export default Portfolio;
