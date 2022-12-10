import React from "react";
import { FaSchool, FaClipboardCheck, FaHeadset } from "react-icons/fa";

const About = () => {
  return (
    <section>
      <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="flex justify-center relative">
          <img
            className="w-64 bg-primary pt-8 rounded-t-full px-8 "
            src="https://i.ibb.co/pRyGpbX/nayon.png"
            alt=""
          />
          <div className="w-64 absolute h-full border-2 border-secondary rounded-t-full -z-10 right-14"></div>
        </div>
        <div className="my-auto p-4">
          <div className="grid grid-cols-3 gap-6">
            <div className="border-2 border-primary rounded-md p-4 text-center">
              <FaSchool className="text-xl font-bold mx-auto "></FaSchool>
              <h4 className="font-semibold">Experience</h4>
            </div>
            <div className="border-2 border-primary rounded-md p-4 text-center">
              <FaClipboardCheck className="text-xl font-bold mx-auto" />
              <h4 className="font-semibold">Complete</h4>
            </div>
            <div className="border-2 border-primary rounded-md p-4 text-center">
              <FaHeadset className="text-xl font-bold mx-auto" />
              <h4 className="font-semibold">Support</h4>
            </div>
          </div>
          <p className="mt-4">
            I am a Front End Developer. I Create web pages with UI/UX user
            interface. I have knowledge of ReactJS component library.
          </p>
          <button className="py-2 px-3 mt-4 border border-primary rounded-lg btn-neutral text-primary hover:bg-primary hover:text-white transition-all duration-500">
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
