import React from "react";

import AnimatedWrapper from "./ui/AnimatedWrapper";

import profile from "../assets/Legend.png";
import SectionHeading from "./SectionHeading";
import techStack from "../data/techStack";

const About = () => {
  return (
    <div
      name="About"
      className=" pt-8 h-full min-h-screen w-full flex items-center  bg-gradient-to-b to-black via-black from-gray-800 "
    >
      <div className="section justify-between">
        <AnimatedWrapper>
          <SectionHeading heading="About Me" />
        </AnimatedWrapper>
        <div className="mb-10  flex flex-col justify-center ">
          <AnimatedWrapper animateFrom="bottom">
            <img
              src={profile}
              alt="Profile"
              width="auto"
              height="auto"
              loading="lazy"
              title="Profile Picture"
              className="cursor-pointer grayscale hover:grayscale-0 hover:scale-[1.02] transition-all delay-75 border-4 border-transparent hover:border-white duration-300 rounded-2xl min-w-[240px] w-1/2 mx-auto  md:w-[270px]"
            />
          </AnimatedWrapper>
        </div>
        <div className="flex flex-col justify-center w-full px-2 xs: sm:px-12 md:px-4 lg:px-14 text-white ">
          <AnimatedWrapper animateFrom="bottom">
            <h3 className="text-2xl xs:text-3xl  sm:text-4xl md:text-5xl lg:text-6xl font-semibold ">
              Hi, I'm{" "}
              <span className="text-cyan-500 block xs:inline">
                Mustafa Abdirahman
              </span>
            </h3>
          </AnimatedWrapper>
          <div className="text-gray-400 py-4 space-y-2 md:space-y-2 md:pt-8 lg:pt-12 font-semibold text-justify">
            <AnimatedWrapper>
              <p className="leading-tight">
                Full Stack Developer & Tech Enthusiast, based in Somaliland.
                Currently working as a Software Developer & System Supporter.
              </p>
            </AnimatedWrapper>
            <AnimatedWrapper>
              <p className="leading-tight">
                I have a passion for building dynamic and high-performing web
                applications using modern technologies
              </p>
            </AnimatedWrapper>
          </div>
          <AnimatedWrapper>
            <div className="py-3 text-gray-50 flex flex-col sm:flex-row font-semibold gap-3 sm:gap-5 sm:items-center">
              <div className="min-w-fit">
                <p>My Tech Stack ~</p>
              </div>
              <AnimatedWrapper>
                <ul className="px-2 flex gap-5 z-40 flex-wrap">
                  {techStack.map(({ icon, name }) => {
                    return (
                      <li key={name} className=" relative list-none group">
                        <span className="z-20">{icon}</span>
                        {/* <div className="flex scale-0 sm:group-hover:scale-100 group-focus:scale-100 transition ease-out duration-300 delay-100 origin-center justify-center items-center absolute z-50 -bottom-10 left-1/2 -translate-x-1/2 w-auto h-6 py-2 px-3 bg-gray-900 text-sm text-gray-300">
                          {name}
                        </div> */}
                      </li>
                    );
                  })}
                </ul>
              </AnimatedWrapper>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </div>
  );
};

export default About;
