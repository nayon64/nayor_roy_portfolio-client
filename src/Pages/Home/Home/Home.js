import React, { useState } from 'react';
import SkillModal from '../../../Shared/SkillModal/SkillModal';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import MyProjects from '../MyProjects/MyProjects';
import Skills from '../Skills/Skills';

const Home = () => {
	const [props,setProps]=useState(null)
	// props, setProps; 
	return (
		<div>
			<Banner></Banner>
			<Skills setProps={setProps}></Skills>
			<MyProjects></MyProjects>
			<About></About>
			<Contact></Contact>
			{
				props && <SkillModal props={props} setProps={setProps}></SkillModal>
			}
		</div>
	);
};

export default Home;