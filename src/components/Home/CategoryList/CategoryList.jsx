import React from "react";
import { useLoaderData } from "react-router-dom";

const CategoryList = () => {
  const { categories } = useLoaderData();
  return (
    <div className="my-container">
      <h1 className='text-4xl text-center mb-5  font-semibold'>Job Category List</h1>
            <p className='text-center mb-7'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className="card-container grid-cols-2 grid lg:grid-cols-4 gap-3 font-semibold">
        {categories?.map((pd, idx) => (
          <div
            key={pd.id}
            className='p-6  bg-indigo-50  space-y-2 text-gray-700 cursor-pointer rounded-md'>
            <img className='h-16' src={pd.logo} alt="" />
            <p className='text-lg font-bold mt-1'>{pd.name}</p>
            <p className='font-semibold mt-1'>{pd.jobsAvailable}+Jobs Available</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
