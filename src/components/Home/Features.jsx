import React from 'react';

import { useLoaderData } from 'react-router-dom'
const Features = () => {
    
    const {features} = useLoaderData();
    console.log(features);
    return (
        <div className='my-container'> 
            
            <div className='grid gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2'>

                {
                    features.map(feature => (
                        <div className= 'p-6 rounded bg-indigo-50 card'>
                            <img className='h-16' src={feature.logo} alt="cover" />
                            <p className='text-lg font-bold mt-1'>{feature.name}</p>
                            <p className='font-semibold mt-1'>{feature.jobsAvailable} Jobs Available</p>
                        </div>
                    ))
                }

            </div>

        </div>
    );
};

export default Features;