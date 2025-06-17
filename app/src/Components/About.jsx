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
        <h1 className="text-white text-center text-[20px] font-light">
          About Me
        </h1>
        <p className="m-auto text-white text-[18px] mt-2 font-semibold ">
          A Professional Full Stack Developer
        </p>
      </div>

      <InView onChange={(inView) => handleInView(inView)}>
        <div className="container max-lg:w-100  ">
          <div
            className={`flex mt-4 max-lg:flex-col ${hasTriggered ? "animate-[moveAboutText_1s]" : "animate-none"
              } `}
          >
            <div className="container flex flex-col mx-auto">
              <p className="text-white font-normal text-xl text-center leading-[50px] py-3 lg:max-w-[800px] lg:m-auto">
                A full-stack developer with a passion for building clean, responsive, and user-focused web applications. My journey into tech began with a full-stack web development bootcamp, where I gained hands-on experience working with technologies like JavaScript, Node.js, Express, MongoDB, React, Tailwind CSS, and Git. I’ve since continued to sharpen my skills through personal projects and freelance work. I take pride in writing clean code, solving real problems, and delivering features that enhance user experience and performance. Whether you're an employer looking for a dedicated team member or a client in need of a developer to bring your idea to life, I’m someone who takes ownership, communicates clearly, and stays focused on delivering results that truly add value. I’m driven by growth, collaboration, and the desire to build meaningful digital solutions that make a real impact.
              </p>
            </div>
          </div>
        </div>
      </InView>
    </div>
  );
};

export default About;
