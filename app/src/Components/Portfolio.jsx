import React, { useState } from "react";
import mortgageCalculator from "../Images/mortgageCalculator.png";
import todoListImage from "../Images/todolistImage.png";
import portfolio from "../Images/portfolio.png";
import Divider from "./Divider";
import { InView } from "react-intersection-observer";

const Portfolio = () => {
  const [hasTriggered, setHasTriggered] = useState(false);

  const handlePortfolioView = (inView) => {
    if (inView) {
      setHasTriggered(true);
    }
  };
  return (
    <div id="portfolio" className="  container mt-20 mx-auto h-fit">
      <Divider />
      <div className="animate-[moveAboutText_1s]">
        <h1 className="text-white text-center text-[40px] font-bold ">
          PORT<span className="text-[#f2fb00]">FOLIO</span>
        </h1>
        <p className="text-white text-center text-[18px] font-light">
          View My Projects
        </p>

        <InView
          onChange={(inView) => handlePortfolioView(inView)}
          triggerOnce={true}
        >
          <div
            className={`flex gap-4 justify-center mt-16 mx-auto max-lg:flex-wrap ${
              hasTriggered ? "animate-[moveAboutText_1s]" : "animate-none"
            }`}
          >
            <div className="card border-none w-[300px] h-fit">
              <img
                className="w-100 h-[300px] img-fluid"
                src={mortgageCalculator}
                alt="mortgage Calculator"
              />
              <div className="card-title">
                <p className="mt-8 text-[20px] text-center font-semibold">
                  Mortgage Calculator App
                </p>
                <div className="card-body text-center">
                  <p className="text-[16px] my-2">
                    A mortgage payment calculator that calculates and displays
                    monthly payments based on user Inputs, including loan
                    amount, interest rate, and term length.
                  </p>
                </div>
                <div className="card-footer flex justify-center">
                  <a
                    className="font-bold p-2"
                    href="https://qunnderrie1.github.io/MortgageCalculatorApp/"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="card border-none w-[300px] h-fit">
              <img
                className="w-100 h-[300px] img-fluid"
                src={portfolio}
                alt="portfolio"
              />
              <div className="card-title">
                <p className="mt-8 text-[20px] text-center font-semibold">
                  Portfolio
                </p>
                <div className="card-body text-center">
                  <p className="text-[16px] my-2">
                    A portfolio website to showcase my skills, projects, and
                    background, providing an overview of my expertise an
                    personal story.
                  </p>
                </div>
                <div className="card-footer flex justify-center">
                  <a
                    className="font-bold p-2"
                    href="https://myportfolio-tbi2.onrender.com/"
                  >
                    View Project
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
