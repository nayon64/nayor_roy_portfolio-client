import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProjectCard from '../../../Shared/ProjectCard/ProjectCard';
import SmallLoader from '../../../Shared/SmallLoader/SmallLoader';


const MyProjects = () => {
	const { data:projects ,isLoading} = useQuery({
		queryKey: ["projects"],
		queryFn: async () => {
			const res = await fetch("https://nayon-roy-portfolio-server.vercel.app/projects");
			const data = await res.json()
			return data

		}
	})
	if (isLoading) {
		return <SmallLoader></SmallLoader>
	}
	
	return (
    <section className="bg-primary">
      <div className="max-w-5xl mx-auto py-6 my-6 px-4 text-white">
        <h1 className="text-4xl font-bold text-center mb-6">
          My Recent Works
				</h1>
				{projects.length > 0 &&
					<div className='grid md:grid-cols-3 sm:grid-clos-2 gap-5'>
					{
							projects.map((project, i) => <ProjectCard key={i} project={project}></ProjectCard>)
					}

				</div>}
      </div>
    </section>
  );
};

export default MyProjects;