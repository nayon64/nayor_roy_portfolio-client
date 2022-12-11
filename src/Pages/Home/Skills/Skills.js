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
    <section className="max-w-5xl mx-auto my-6 px-4 ">
      <h1 className="text-4xl font-bold text-center mb-6">My Skills</h1>
      <div className="grid sm:grid-cols-2 max-w-3xl mx-auto gap-6">
        <div className="flex justify-between border border-primary p-4 text-primary rounded-lg">
          <div className="flex items-center">
            <img
              className="w-9 icon-img my-auto hover:scale-125 duration-300 transition"
              src={htmlIcon}
              alt=""
            />
            <div className="ml-3">
              <h2 className="text-xl font-semibold">HTML5</h2>
              <p>1 year of experience</p>
            </div>
          </div>

          <button className="flex items-start">&#129062;</button>
        </div>
        <div className="flex justify-between border border-primary p-4 text-primary rounded-lg">
          <div className="flex items-center">
            <img className="w-9 my-auto" src={cssIcon} alt="" />
            <div className="ml-3">
              <h2 className="text-xl font-semibold">CSS3</h2>
              <p>1 year of experience</p>
            </div>
          </div>

          <button className="flex items-start">&#129062;</button>
        </div>
        <div className="flex justify-between border border-primary p-4 text-primary rounded-lg">
          <div className="flex items-center">
            <img className="w-9 my-auto" src={boostrapIcon} alt="" />
            <div className="ml-3">
              <h2 className="text-xl font-semibold">Bootstrap</h2>
              <p>1 year of experience</p>
            </div>
          </div>

          <button className="flex items-start">&#129062;</button>
        </div>
        <div className="flex justify-between border border-primary p-4 text-primary rounded-lg">
          <div className="flex items-center">
            <img className="w-9 my-auto" src={tailwindIcon} alt="" />
            <div className="ml-3">
              <h2 className="text-xl font-semibold">Tailwind</h2>
              <p>6 months of experience</p>
            </div>
          </div>

          <button className="flex items-start">&#129062;</button>
        </div>
        <div className="flex justify-between border border-primary p-4 text-primary rounded-lg">
          <div className="flex items-center">
            <img className="w-9 my-auto" src={jsIcon} alt="" />
            <div className="ml-3">
              <h2 className="text-xl font-semibold">JavaScript</h2>
              <p>5 months of experience</p>
            </div>
          </div>

          <button className="flex items-start">&#129062;</button>
        </div>
        <div className="flex justify-between border border-primary p-4 text-primary rounded-lg">
          <div className="flex items-center">
            <img className="w-9 my-auto" src={reactIcon} alt="" />
            <div className="ml-3">
              <h2 className="text-xl font-semibold">ReactJS</h2>
              <p>4 months experience</p>
            </div>
          </div>

          <button className="flex items-start">&#129062;</button>
        </div>
        <div className="flex justify-between border border-primary p-4 text-primary rounded-lg">
          <div className="flex items-center">
            <img className="w-9 my-auto" src={githubIcon} alt="" />
            <div className="ml-3">
              <h2 className="text-xl font-semibold">GitHub</h2>
              <p>5 months of experience</p>
            </div>
          </div>

          <button className="flex items-start">&#129062;</button>
        </div>
        <div className="flex justify-between border border-primary p-4 text-primary rounded-lg">
          <div className="flex items-center">
            <img className="w-9 my-auto" src={htmlIcon} alt="" />
            <div className="ml-3">
              <h2 className="text-xl font-semibold">HTML5</h2>
              <p>1 year of experience</p>
            </div>
          </div>

          <button className="flex items-start">&#129062;</button>
        </div>
      </div>
    </section>
  );
};

export default Skills;