import React from 'react';
import htmlIcon from "../../../assets/icons/html-5.png"
import cssIcon from "../../../assets/icons/css-3.png"
import jsIcon from "../../../assets/icons/js.png"
import reactIcon from "../../../assets/icons/physics.png"
import githubIcon from "../../../assets/icons/github.png"

const Skills = () => {
	return (
		<section className='max-w-7xl mx-auto my-6 px-4'>
			<h1 className='text-4xl font-bold text-center mb-6'>My Skills</h1>
			<div className='flex flex-wrap justify-between'>
				<div><img className='w-24' src={htmlIcon} alt="" /></div>
				<div><img className='w-24' src={cssIcon} alt="" /></div>
				<div><img className='w-24' src={jsIcon} alt="" /></div>
				<div><img className='w-24' src={reactIcon} alt="" /></div>
				<div><img className='w-24' src={githubIcon} alt="" /></div>
			</div>
		</section>
	);
};

export default Skills;