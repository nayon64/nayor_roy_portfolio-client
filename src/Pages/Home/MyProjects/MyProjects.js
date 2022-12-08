import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProjectCart from '../../../Shared/ProjectCart/ProjectCart';
import SmallLoader from '../../../Shared/SmallLoader/SmallLoader';


const MyProjects = () => {
	const { data:projects ,isLoading} = useQuery({
		queryKey: ["projects"],
		queryFn: async () => {
			const res = await fetch("project.json")
			const data = await res.json()
			return data

		}
	})
	if (isLoading) {
		return <SmallLoader></SmallLoader>
	}
	console.log(projects)
	return (
    <section className="bg-primary">
      <div className="max-w-5xl mx-auto py-6 my-6 px-4 text-white">
        <h1 className="text-4xl font-bold text-center mb-6">
          Some Things I've Built
				</h1>
				{projects.length > 0 &&
					<div>
					{
						projects.map((project, i) => <ProjectCart
							key={i}
							i={i}
							project={project}
						></ProjectCart>)
					}

				</div>}
      </div>
    </section>
  );
};

export default MyProjects;