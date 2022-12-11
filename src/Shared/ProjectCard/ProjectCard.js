import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className=" rounded-md overflow-hidden h-96  bg-secondary shadow-xl ">
      <div className="px-2 h-1/2 overflow-hidden">
        <img className="" src={project?.img} alt="Shoes" />
      </div>
      <div className=" flex flex-col justify-between h-1/2 pt-1 pb-4 px-4">
        <div>
          <div className="divider text-xl font-semibold">
            {project?.projectName}
          </div>
          <h3 className="text-center text-sm -mt-2">{project?.title}</h3>
          <div className="flex flex-wrap justify-center mt-2">
            {project?.features.map((feature, i) => (
              <p
                className="border m-1 text-xs px-2 py-1  text-white rounded-2xl"
                key={i}
              >
                {feature}
              </p>
            ))}
          </div>
        </div>
        <div className="flex mt-2 justify-center">
          <Link to={`/porjectDetails/${project?._id}`}>
            <button className=" px-3 py-2 border rounded-lg border-white text-sm hover:bg-white hover:text-primary duration-200">
              More Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
