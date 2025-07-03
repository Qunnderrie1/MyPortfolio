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
    <div id="about" className="bg-black mt-[250px] h-fit pt-6">

      <div className="flex flex-col">
        <h1 className="text-white text-center text-[30px] font-normal">
          <span className="text-purple-500">About</span>Me
        </h1>
      </div>

      <InView onChange={(inView) => handleInView(inView)}>
        <div className="container max-lg:w-100  ">
          <div
            className={`flex mt-4 max-lg:flex-col ${hasTriggered ? "animate-[moveAboutText_1s]" : "animate-none"
              } `}
          >
            <div className="container flex flex-col mx-auto">
              <p className="text-white font-light text-xl text-center leading-[50px] py-3 lg:max-w-[800px] lg:m-auto">
                Hi, I'm Qunnderrie, a Full Stack Developer who builds real-world projects from the ground up. I have hands-on experience with technologies like React, Node.js, JavaScript, Tailwind CSS, SQL, and more. I'm passionate about creating clean, responsive web applications that solve real problems and deliver great user experiences.              </p>
            </div>
          </div>
        </div>
      </InView>
    </div>
  );
};

export default About;
