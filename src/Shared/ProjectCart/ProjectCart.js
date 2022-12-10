import React from 'react';
import { Link } from 'react-router-dom';
import { BsBoxArrowUpRight } from "react-icons/bs";
import { TbBrandGithub } from "react-icons/tb";

const ProjectCart = ({ i, project }) => {
	
	const odd = (i + 1) % 2
	
	return (
    <section className={`grid md:grid-cols-2  max-h-96 overflow-hidden my-24`}>
      <div
        className={`${
          odd === 1 ? "order-1 -mr-12 z-10" : "order-2 -ml-12 z-20"
        }`}
      >
        <img className="w-full " src={project?.img} alt="" />
      </div>

      <div
        className={`flex flex-col max-h-96 justify-center ${
          odd === 1 ? "text-right order-2 z-10" : "text-left order-1 z-20"
        }`}
      >
        <h3 className="text-accent font-semibold">{project?.caption}</h3>
        <h1 className="text-3xl font-bold hover:text-accent duration-500 cursor-pointer">
          {project?.projectName}
        </h1>
        <div className="w-full bg-secondary rounded-md p-4 my-5">
          <p>{project?.details}</p>
        </div>
        <p>
          {project?.features?.map((feature,i) => (
            <span 
              key={i}
              className={`${
                odd === 1 ? "ml-3" : "mr-3"
              }`}
            >
              {feature}
            </span>
          ))}{" "}
        </p>
        <div
          className={`flex  items-center mt-2 ${
            odd === 1 ? "justify-end" : "justify-start"
          }`}
        >
          <Link className="flex items-center hover:text-accent duration-500 ">
            <TbBrandGithub className="text-3xl font-bold" />{" "}
            <span className=" font-bold">Client</span>
          </Link>
          <Link className="flex items-center hover:text-accent duration-500">
            <TbBrandGithub className="text-3xl font-bold ml-4" />{" "}
            <span className=" font-bold">Server</span>
          </Link>
          <Link className="hover:text-accent duration-500">
            <BsBoxArrowUpRight className="text-2xl font-bold ml-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectCart;