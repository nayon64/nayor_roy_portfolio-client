import React from 'react';
import Banner from '../Banner/Banner';
import MyProjects from '../MyProjects/MyProjects';
import Skills from '../Skills/Skills';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Skills></Skills>
			<MyProjects></MyProjects>
		</div>
	);
};

export default Home;