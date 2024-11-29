import React from "react";
import Divider from "./Divider";

const About = () => {
  return (
    <div id="about" className="bg-black mt-20 h-fit pt-6">
      <Divider />
      <div className="container max-lg:w-100 ">
        <div className="flex mt-4 max-lg:flex-col max-lg:p-0">
          <div className="container mx-auto">
            <h1 className="text-white text-center text-3xl font-bold ">
              About Me
            </h1>
            <div className="w-[150px] h-0.5 flex justify-center m-auto bg-[#f2fb00]"></div>
            <p className="text-white mt-0 text-xl text-center leading-10 py-10">
              Welcome to my portfolio! I'm Qunnderrie, a Full Stack Web
              Developer from Columbus, Georgia. After earning my Full Stack Web
              Development certification through a coding bootcamp, I've gained
              experience with frontend and backend technologies like React,
              Node.js, Express.js, MongoDB, HTML, CSS, and more. I’m passionate
              about coding and love creating user-friendly, efficient web
              applications. Whether it’s designing sleek interfaces or building
              scalable backend solutions, I’m always excited to turn ideas into
              reality through code. Thanks for visiting—feel free to explore my
              work and reach out if you'd like to collaborate!
            </p>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;
