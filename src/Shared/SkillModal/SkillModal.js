import React from 'react';

const SkillModal = ({ props, setProps }) => {
	console.log(props)
	return (
    <div className="absolute card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
          <button className="btn btn-primary" onClick={()=>setProps(null)}>Cancle</button>
        </div>
      </div>
    </div>
  );
};

export default SkillModal;