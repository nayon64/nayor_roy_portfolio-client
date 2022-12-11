import React from 'react';

const SmallLoader = () => {
	return (
    <div className='flex justify-center py-8'>
      <div className="w-12 h-12 border-4 rounded-full border-dashed animate-spin border-green-500"></div>
    </div>
  );
};

export default SmallLoader;