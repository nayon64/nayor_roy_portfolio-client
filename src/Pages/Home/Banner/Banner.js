import React from 'react';

const Banner = () => {
	return (
    <div className="hero  py-20 bg-primary">
      <div className="hero-content max-w-5xl mx-auto grid md:grid-cols-2">
        <div className="mx-auto max-w-xs  border-8 hover:bg-secondary duration-500 rounded-full overflow-hidden">
          <img
            className=" transition-all  hover:translate-x-2 hover:translate-y-3 duration-500"
            src="https://i.ibb.co/c8WtGZ2/nayonroy.png"
            alt=""
          />
        </div>
        <div className="text-white">
          <h4 className="text-lg font-semibold">Front End Developer</h4>
          <h1 className="text-5xl font-bold uppercase">Nayon Roy</h1>
          <p className="py-6 ">
            I am a Front End Developer. Create a website with the ReactJS
            component library. Coding is my passion. It gives me happiness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;