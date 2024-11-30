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
            <a href="https://qunnderrie1.github.io/MortgageCalculatorApp/">
              <div className="card border-none w-[300px]">
                <img
                  className="w-100 h-[275px] img-fluid"
                  src={mortgageCalculator}
                  alt="mortgage Calculator"
                />
                <div className="card-title">
                  <p className="mt-8 text-xl text-center font-bold">
                    Mortgage Calculator App
                  </p>
                  <div className="card-body"></div>
                </div>
              </div>
            </a>
            <a href="https://fullstacktodoapp-lqgy.onrender.com/">
              <div className="card border-none w-[300px]">
                <img
                  className="w-100 h-[275px] img-fluid"
                  src={todoListImage}
                  alt="todolist app"
                />
                <div className="card-title">
                  <p className="mt-8 text-xl text-center font-bold">
                    Full Stack Todo List App
                  </p>
                  <div className="card-body"></div>
                </div>
              </div>
            </a>
            <a href="https://fullstacktodoapp-lqgy.onrender.com/">
              <div className="card border-none w-[300px]">
                <img
                  className="w-100 h-[275px] img-fluid"
                  src={portfolio}
                  alt="portfolio"
                />
                <div className="card-title">
                  <p className="mt-8 text-xl text-center font-bold">
                    Portfolio
                  </p>
                  <div className="card-body"></div>
                </div>
              </div>
            </a>
          </div>
        </InView>
      </div>
    </div>
  );
};

export default Portfolio;
