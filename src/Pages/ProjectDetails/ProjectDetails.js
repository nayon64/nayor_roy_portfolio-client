import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import SmallLoader from '../../Shared/SmallLoader/SmallLoader';

const ProjectDetails = () => {
const {id}=useParams()

const { data: project, isLoading } = useQuery({
  queryKey: ["projects",id],
  queryFn: async () => {
    const res = await fetch(`https://nayon-roy-portfolio-server.vercel.app/project/${id}`);
    const data = await res.json();
    return data;
  },
});
	console.log(project)
if (isLoading) {
  return <SmallLoader></SmallLoader>;
}

	return (
    <div className="">
      <div className="grid md:grid-cols-2 my-12 gap-6 max-w-4xl mx-auto">
        <div className="px-12  border-2 border-neutral shadow-md">
          <img src={project.img} alt="" />
        </div>
        <div className="grid gap-6">
          <div className="px-12  border-2 border-neutral shadow-md">
            <img src={project.img1} alt="" />
          </div>
          <div className="px-12  border-2 border-neutral shadow-md">
            <img src={project.img2} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-secondary p-12 text-white font-bold text-4xl text-center">
        {project.projectName}
      </div>
    </div>
  );
};

export default ProjectDetails;