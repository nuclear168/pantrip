import React from 'react'

const Category = ({ icon, itemId, name }) => {
  return (
    <div
      role="button"
      style={{
        display: "inline-block",
        margin: "0 5px",
        width: "80px",
        userSelect: "none",
      }}
      tabIndex={0}
      className="mx-auto text-center text-gray-900 hover:text-gray-400 focus:text-gray-600 py-5 hover:border-b-4 hover:border-gray-400 focus:border-b-4 focus:border-gray-600"
    >
      <div>{icon}</div>
      <div className='text-[12px]'>{name}</div>
    </div>
  );
}

export default Category