import React from 'react';

import { useLoaderData } from 'react-router-dom'
const Category = () => {

    const { features } = useLoaderData();
    return (
        <div className='my-container'>

            <h1 className='text-4xl text-center mb-5  font-semibold'>Job Category List</h1>
            <p className='text-center mb-7'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2'>

                {
                    features.map(feature => (
                        <div>
                            <div className='p-6 rounded bg-indigo-50 card'>
                                <img className='h-16' src={feature.logo} alt="cover" />
                                <p className='text-lg font-bold mt-1'>{feature.name}</p>
                                <p className='font-semibold mt-1'>{feature.jobsAvailable}+ Jobs Available</p>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    );
};

export default Category;