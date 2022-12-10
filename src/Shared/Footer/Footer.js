import React from 'react';

const Footer = () => {

	const year = new Date().getFullYear()
	console.log(year)
	

	return (
    <div className="bg-primary px-4 py-8 text-center text-white mt-12">
      <h1>Copyright © {year} - All right reserved</h1>
    </div>
  );
};

export default Footer;