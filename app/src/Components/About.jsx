import React, { useState } from "react";
import Divider from "./Divider";
import { InView } from "react-intersection-observer";

const About = () => {
  const [hasTriggered, setHasTriggered] = useState(false);

  const handleInView = (inView) => {
    if (inView) {
      setHasTriggered(true);
    }
  };

  return (
    <div id="about" className="bg-black mt-20 h-fit pt-6">
      <Divider />

      <div className="flex flex-col">
        <h1 className="text-white text-center text-[40px] font-bold">
          ABOUT <span className="text-[#f2fb00]">ME</span>
        </h1>
        <p className="m-auto text-white text-[18px] font-light mt-2">
          Software Engineer
        </p>
      </div>

      <InView onChange={(inView) => handleInView(inView)}>
        <div className="container max-lg:w-100  ">
          <div
            className={`flex mt-4 max-lg:flex-col ${
              hasTriggered ? "animate-[moveAboutText_1s]" : "animate-none"
            } `}
          >
            <div className="container flex flex-col mx-auto">
              <p className="text-white mt-0 text-xl text-center leading-10 py-10">
                Welcome to my portfolio! I'm Qunnderrie, a Full Stack Web
                Developer from Columbus, Georgia. After earning my Full Stack
                Web Development certification through a coding bootcamp, I've
                gained experience with frontend and backend technologies like
                React, Node.js, Express.js, MongoDB, HTML, CSS, and more. I’m
                passionate about coding and love creating user-friendly,
                efficient web applications. Whether it’s designing sleek
                interfaces or building scalable backend solutions, I’m always
                excited to turn ideas into reality through code. Thanks for
                visiting—feel free to explore my work and reach out if you'd
                like to collaborate!
              </p>
            </div>
          </div>
        </div>
      </InView>
    </div>
  );
};

export default About;
