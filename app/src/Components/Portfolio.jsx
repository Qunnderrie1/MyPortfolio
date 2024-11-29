import React from "react";
import mortgageCalculator from "../Images/mortgageCalculator.png";
import todoListImage from "../Images/todolistImage.png";
import Divider from "./Divider";
const Portfolio = () => {
  return (
    <div id="portfolio" className="container mt-20 mx-auto h-fit">
      <Divider />
      <h1 className="text-white text-center text-3xl font-bold ">Portfolio</h1>
      <div className="w-[120px] h-0.5 flex justify-center m-auto bg-[#f2fb00]"></div>

      <div className="flex gap-4 justify-center mt-16 mx-auto max-lg:flex-wrap">
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
              alt="mortgage Calculator"
            />
            <div className="card-title">
              <p className="mt-8 text-xl text-center font-bold">
                Full Stack Todo List App
              </p>
              <div className="card-body"></div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
