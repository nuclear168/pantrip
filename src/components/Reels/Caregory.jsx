import React from 'react'
const ReelsCategory = ({ icon, itemId, name, nimDetail }) => {
  
  return (
    <div
      role="button"
      style={{
        display: "inline-block",
        margin: "0 10px",
        width: "180px",
        userSelect: "none",
      }}
      tabIndex={0}
      className="mx-auto text-gray-900 hover:text-gray-400 focus:text-gray-600 py-5 hover:border-gray-400 focus:border-gray-600"
    >
      <div>{icon}</div>
      <div className='text-[12px]'>{name}</div>
      <div className='text-[12px]'>{nimDetail}</div>
    </div>
  );
}

export default ReelsCategory