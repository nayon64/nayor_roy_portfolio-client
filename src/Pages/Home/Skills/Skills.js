import React from 'react';
import htmlIcon from "../../../assets/icons/html-5.png"
import cssIcon from "../../../assets/icons/css-3.png"
import boostrapIcon from "../../../assets/icons/bootstrap.png"
import tailwindIcon from "../../../assets/icons/tailwind.png"
import jsIcon from "../../../assets/icons/js.png"
import reactIcon from "../../../assets/icons/physics.png"
import githubIcon from "../../../assets/icons/github.png"

const Skills = () => {
	return (
    <section className="max-w-5xl mx-auto my-6 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">My Skills</h1>
      <marquee>
        <div className="flex flex-wrap justify-between">
          <div className="rounded-lg p-4">
            <img className="w-24" src={htmlIcon} alt="" />
          </div>
          <div className="rounded-lg p-4">
            <img className="w-24" src={cssIcon} alt="" />
          </div>
          <div className="rounded-lg p-4 ">
            <img className="w-24" src={boostrapIcon} alt="" />
          </div>
          <div className="rounded-lg p-4 flex items-center">
            <img className="w-24" src={tailwindIcon} alt="" />
          </div>
          <div className="rounded-lg p-4">
            <img className="w-24" src={jsIcon} alt="" />
          </div>
          <div className="rounded-lg p-4">
            <img className="w-24" src={reactIcon} alt="" />
          </div>
          <div className="rounded-lg p-4">
            <img className="w-24" src={githubIcon} alt="" />
          </div>
        </div>
      </marquee>
    </section>
  );
};

export default Skills;