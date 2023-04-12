import React from "react";
import Lottie from "lottie-react";
import programming from "../Header/programming.json";
import background from "../../assets/All Images/P3OLGJ1 copy 1.png";
import CategoryList from "./CategoryList/CategoryList";
import FeaturedJob from "./FeaturedJobs/FeaturedJob";
const Home = () => {
  return (
    <div>
      <div className="my-container">
        <div className="my-container p-5 lg:p-0 lg:flex-row flex-col flex items-center justify-between">
          <div className="lg:w-[570px] space-y-2 lg:space-y-6">
          <h1 className='text-6xl font-bold text-black mb-3'>One Step <br /> Closer To Your <br /><span className='text-indigo-700'> Dream Job</span></h1>
            <p className="text-gray-700">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div className='relative lg:w-1/2 '>
        <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
          <Lottie animationData={programming} loop={true} />
        </div>
      </div>
        </div>
      </div>
      <div className="my-container p-3">
        <CategoryList />
        <FeaturedJob />
      </div>
    </div>
  );
};

export default Home;
