import React from 'react';

const SkillModal = ({ props, setProps }) => {
  console.log(props)
  console.log("Programing"&&"Hero")
	return (
    <div className="fixed bg-primary transition-all duration-300 bg-opacity-70 top-0 flex items-center w-screen justify-center  h-full">
      <div className=" card w-96 bg-red-100 shadow-xl mx-auto">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            <button className="btn btn-primary" onClick={() => setProps(null)}>
              Cancle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillModal;