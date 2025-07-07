import React, { useState } from "react";
import { InView } from "react-intersection-observer";

const About = () => {
  const [hasTriggered, setHasTriggered] = useState(false);

  const handleInView = (inView) => {
    if (inView) {
      setHasTriggered(true);
    }
  };

  return (
    <div id="about" className="bg-black mt-[250px] text-left h-fit pt-6 max-md:text-center  container">

      <div className="flex flex-col">
        <h1 className="text-white text-[30px] font-normal">
          <span className="text-purple-500 ">About</span>Me
        </h1>
      </div>

      <InView onChange={(inView) => handleInView(inView)}>
        <div className="container max-lg:w-200  ">
          <div
            className={`flex mt-4 max-lg:flex-col ${hasTriggered ? "animate-[moveAboutText_1s]" : "animate-none"
              } `}
          >
            <div className=" flex flex-col">
              <p className="text-white font-light text-xl text-left leading-[50px] py-3 lg:max-w-[900px] lg:m-auto max-md:text-center">
                I'm a passionate full stack web developer with a strong foundation in building responsive, user-focused applications using modern technologies like React, Node.js, Express, MongoDB, and SQL. I enjoy solving real-world problems through clean, efficient code and bringing ideas to life from concept to deployment. Whether it’s creating dynamic front-end interfaces or building robust back-end systems, I’m always eager to learn, adapt, and grow. My goal is to develop software that makes a positive impact, and I’m excited about collaborating on meaningful projects that push the boundaries of what's possible on the web.</p>
            </div>
          </div>
        </div>
      </InView>
    </div>
  );
};

export default About;
