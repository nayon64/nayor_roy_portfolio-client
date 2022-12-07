import React from 'react';

const Banner = () => {
	return (
    <div className="hero py-20 bg-primary">
      <div className="hero-content grid md:grid-cols-2">
        <div className="mx-auto w-72 border-8 hover:bg-secondary duration-500 rounded-full overflow-hidden">
          <img
            className=" transition-all hover:translate-x-2 hover:translate-y-3 duration-500"
            src="https://i.ibb.co/c8WtGZ2/nayonroy.png"
            alt=""
          />
        </div>
				<div className="text-white">
					<h4>React Developer</h4>
          <h1 className="text-5xl font-bold uppercase">Nayon Roy</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;