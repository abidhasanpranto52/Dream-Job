import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import {
    BoltSlashIcon,
    Bars3BottomRightIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='flex items-center justify-between'>
            {/*Logo */}
            <Link to='/' className='inline-flex items-center'>
                <BoltSlashIcon className='h-6 w-6' />
                <span>
                    <h4 className='text-3xl font-bold'>Next page</h4>
                </span>
            </Link>


            <ul className='items-center hidden space-x-8 lg:flex'>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) => (isActive ? 'text-blue-700' : '')}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/statistics'
                        className={({ isActive }) => (isActive ? 'text-blue-700' : '')}
                    >
                        Statistics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/jobs'
                        className={({ isActive }) => (isActive ? 'text-blue-700' : '')}
                    >
                        Applied Jobs
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/blog'
                        className={({ isActive }) => (isActive ? 'text-blue-700' : '')}
                    >
                        Blog
                    </NavLink>
                </li>
            </ul>
            {/* Mobile Navbar Section */}
            <div className='lg:hidden'>
                {/* Dropdown Open Button */}
                <button
                    aria-label='Open Menu'
                    title='Open Menu'
                    onClick={() => setIsMenuOpen(true)}
                >
                    <Bars3BottomRightIcon className='w-5 text-gray-600' />
                </button>
                {isMenuOpen && (
                    <div className='absolute top-0 left-0 w-full z-10'>
                        <div className='p-5 bg-white border rounded shadow-sm'>
                            {/* Logo & Button section */}
                            <div className='flex items-center justify-between mb-4'>
                                <div>
                                    <Link to='/' className='inline-flex items-center'>
                                        <BoltSlashIcon className='h-6 w-6 text-blue-500' />
                                        <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                            nextPage
                                        </span>
                                    </Link>
                                </div>
                                {/* Dropdown menu close button */}
                                <div>
                                    <button
                                        aria-label='Close Menu'
                                        title='Close Menu'
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <XMarkIcon className='w-5 text-gray-600' />
                                    </button>
                                </div>
                            </div>
                            {/* Mobile Nav Items Section */}
                            <nav>
                                <ul className='space-y-4'>
                                    <li>
                                        <Link to='/' className='default'>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/statistics'
                                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                        >
                                            Statistics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/jobs'
                                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                        >
                                            Applied Jobs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/blog'
                                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;