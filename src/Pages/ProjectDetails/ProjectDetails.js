import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { TbBrandGithub } from 'react-icons/tb';
import { PhotoProvider, PhotoView } from 'react-photo-view';
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
	
// 	<PhotoProvider>
//     <PhotoView src={picture}>
//       <img className="h-full object-cover w-full" src={picture} alt="" />
//     </PhotoView>
//   </PhotoProvider>;
	
	console.log(project)
if (isLoading) {
  return <SmallLoader></SmallLoader>;
}

	return (
    <div className="">
      <div className="grid md:grid-cols-2 my-12 gap-6 max-w-4xl mx-auto">
        <div className="px-12 rounded-lg py-2  border-2 border-neutral shadow-md">
          <PhotoProvider>
            <PhotoView src={project?.img}>
              <img src={project?.img} alt="" />
            </PhotoView>
          </PhotoProvider>
        </div>
        <div className="grid gap-6">
          <div className="px-12 rounded-lg py-2 border-2 border-neutral shadow-md">
            <PhotoProvider>
              <PhotoView src={project?.img1}>
                <img src={project?.img1} alt="" />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="px-12 rounded-lg py-2  border-2 border-neutral shadow-md">
            <PhotoProvider>
              <PhotoView src={project?.img2}>
                <img src={project?.img2} alt="" />
              </PhotoView>
            </PhotoProvider>
          </div>
        </div>
      </div>
      <div className="bg-secondary rounded-lg p-8 max-w-5xl mx-auto">
        <h1 className="text-white font-bold text-4xl text-center">
          {project.projectName}
        </h1>
        <p className="text-white text-center mt-1">{project?.title}</p>
        <div className="text-white flex justify-center mt-3">
          <a
            href={project?.link?.clientSiteLink}
            className="flex items-center hover:text-accent duration-500 "
          >
            <TbBrandGithub className="text-3xl font-bold" />{" "}
            <span className=" font-bold">Client</span>
          </a>
          <a
            href={project?.link?.serverSiteLink}
            className="flex items-center hover:text-accent duration-500"
          >
            <TbBrandGithub className="text-3xl font-bold ml-6" />{" "}
            <span className=" font-bold">Server</span>
          </a>
          <a
            href={project?.link?.liveLink}
            className="hover:text-accent duration-500"
          >
            <BsBoxArrowUpRight className="text-2xl font-bold ml-6" />
          </a>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-6">
        <div className="border border-primary rounded-lg p-4">
          <h3 className="text-2xl font-bold mb-2 ">Porject Details: </h3>
          <p className="text-justify">{project?.details}</p>
        </div>
        <div className="border border-primary rounded-lg p-1 ">
          <h3 className="text-2xl font-bold mb-2 pt-3 px-3">
            What's technology used:{" "}
          </h3>
          <div className="flex flex-wrap ">
            {project?.features.map((feature, i) => (
              <p
                key={i}
                className="bg-secondary text-white text-xl font-semibold rounded-lg m-3 px-3 py-1"
              >
                {feature}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;