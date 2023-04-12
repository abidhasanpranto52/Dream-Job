import React from 'react'
import Lottie from 'lottie-react'
import programming from '../Header/programming.json'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link, useLoaderData } from 'react-router-dom'
import Features from './Features'

const Home = () => {
    return (
        <div>
            <div className='my-container mx-auto flex flex-col items-center justify-around lg:flex-row'>
                {/* Text Content */}
                <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
                    <div className='max-w-xl mb-6 lg:mt-8'>

                        <h1 className='text-6xl font-bold text-black mb-3'>One Step <br /> Closer To Your <br /><span className='text-indigo-700'> Dream Job</span></h1>
                        <p className='text-base text-gray-700 md:text-lg'>
                            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                        </p>
                    </div>
                    <div className='flex flex-col items-center md:flex-row'>
                        <Link to='/statistics' className='btn rounded p-3 text-white md:w-auto md:mr-4 bg-indigo-500'>
                            <div className='inline-flex items-center justify-center w-full h-full'>
                                <p className='mr-2'>Get Started</p>
                                <ArrowRightIcon className='w-5 text-gray-100' />
                            </div>
                        </Link>
                    </div>
                </div>
                {/* Lottie Animation */}
                <div className='relative lg:w-1/2 '>
                    <div className='w-full lg:w-4/5 lg:ml-auto h-80 sm:h-96'>
                        <Lottie animationData={programming} loop={true} />
                    </div>
                </div>
            </div>
            <Features/>
        </div>



        // job category


    )
}

export default Home;