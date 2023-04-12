import React, { useEffect, useState } from 'react';

const Jobs = () => {
    const [jobs, setjobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setjobs(data))
    }, [])

    return (
        <div className='my-container'>
            <h1 className='text-4xl text-center mb-5  font-semibold'>Featured Jobs</h1>
            <p className='text-center mb-7'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid gap-5 mb-8 lg:grid-cols-2 sm:grid-cols-1'>
                {
                    jobs.map(job => <AppliedJob
                        job={job}>
                    </AppliedJob>)
                }
            </div>
        </div>
    );
};

const AppliedJob = ({ job }) => {
    return (

        <div className='p-6 rounded bg-indigo-50 card'>
            <img className='h-16' src={job.logo} alt="cover" />
        </div>
    )

}

export default Jobs;