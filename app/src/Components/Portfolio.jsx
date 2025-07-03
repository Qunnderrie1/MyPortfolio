import React, { useState } from "react";
import mortgageCalculator from "../Images/mortgageCalculatorImage.png";
import portfolioImage from "../Images/portfolioImage.png";
import todoListImage from "../Images/todolistImage.png";
import portfolio from "../Images/portfolio.png";
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
        <h1 className="text-white text-center text-[30px] font-normal">
          <span className="text-purple-500">My</span>Projects
        </h1>

        <InView
          onChange={(inView) => handlePortfolioView(inView)}
          triggerOnce={true}
        >
          <div
            className={`flex gap-4 justify-center  mt-16 mx-auto max-lg:flex-wrap ${hasTriggered ? "animate-[moveSkillCard1_1s]" : "animate-none"
              }`}
          >
            <div className="card border-none w-[360px] h-fit bg-[#171717] text-white">
              <img
                className=" w-[360px] img-fluid  object-contain "
                src={mortgageCalculator}
                alt="mortgage Calculator"
              />
              <div className="card-title py-4">
                <p className="mt-2 text-[18px] text-center font-normal">
                  Mortgage Calculator App
                </p>
                <div className="card-body text-center">
                </div>
                <div className=" flex justify-center bg-[#171717] mx-4   ">
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
              <div className="card-title py-4">
                <p className="mt-2 text-[18px] text-center font-normal">
                  Portfolio Website
                </p>
                <div className="card-body text-center">
                </div>
                <div className=" flex justify-center bg-[#171717] mx-4   ">
                  <a
                    className="font-normal p-2 text-white "
                    href="https://qunnderrie1.github.io/MyPortfolio/"
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
