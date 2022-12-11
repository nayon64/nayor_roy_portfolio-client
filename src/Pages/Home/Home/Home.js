import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import MyProjects from '../MyProjects/MyProjects';
import Skills from '../Skills/Skills';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Skills></Skills>
			<MyProjects></MyProjects>
			<About></About>
			<Contact></Contact>
		</div>
	);
};

export default Home;