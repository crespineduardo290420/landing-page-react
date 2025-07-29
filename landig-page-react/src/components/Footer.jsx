import React from 'react'

import { RiCheckboxBlankCircleFill, RiInstagramLine, RiFacebookLine, RiTwitterLine, RiGithubLine } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className='bg-footer xl:p-20 p-8'>
        <div className='flex flex-col md:flex-row gap-4 items-center justify-between border-b border-gray-500 pb-8'>
            {/* logo */}
        <div className='w-1/6'>
         <a href='#' className='text-2xl font-bold relative p-1 bg-footer text-white'>Power<span className='text-primary text-5xl'>.</span><RiCheckboxBlankCircleFill className='absolute -left-3 -bottom-3 text-primary -z-10' /></a>
        </div>

        {/* redes sociales */}
        <nav className='flex items-center gap-4'>
            <a className='block rounded-full text-white p-4 bg-primary' href="#"> {" "} <RiInstagramLine />{" "} </a>
            <a className='block rounded-full text-white p-4 bg-primary' href="#"> {" "} <RiFacebookLine />{" "} </a>
            <a className='block rounded-full text-white p-4 bg-primary' href="#"> {" "} <RiTwitterLine />{" "} </a>
            <a className='block rounded-full text-white p-4 bg-primary' href="#"> {" "} <RiGithubLine />{" "} </a>
        </nav>
        </div>
        <div className='mt-8'>
            <h3 className='text-lg font-bold text-white text-center md:text-left'>Company</h3>
            <nav className='mt-4 flex flex-col md:flex-row items-center justify-between gap-4'>
                <a href="#" className='text-gray-300 mt-4 hover:text-white transition-colors'>About Us</a>
                <a href="#" className='text-gray-300 mt-4 hover:text-white transition-colors'>Press</a>
                <a href="#" className='text-gray-300 mt-4 hover:text-white transition-colors'>Investors</a>
                <a href="#" className='text-gray-300 mt-4 hover:text-white transition-colors'>Events</a>
                <a href="#" className='text-gray-300 mt-4 hover:text-white transition-colors'>Terms of Use</a>
                <a href="#" className='text-gray-300 mt-4 hover:text-white transition-colors'>Privacy Policy</a>
                <button type='button' className='font-semibold py-2 px-6 bg-primary text-white rounded-xl'>Contact Us</button>
            </nav>
        </div>
        <div className='mt-20'>
            <p className='text-gray-300 text-center'>Power 2024 - All Rights Reserved</p>
        </div>
    </footer>
  ) 
}

export default Footer