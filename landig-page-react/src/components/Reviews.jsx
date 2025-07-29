import React from 'react'

//icons
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'

const Reviews = () => {
  return (
    <div className='p-8 flex flex-col gap-8 bg-gray-100'>
        <h1 className='text-[40px] text-center font-black'>Let's hear What they says</h1>
        <div className='flex justify-center gap-4'>
            <span className='text-5xl text-primary'><RiDoubleQuotesL /></span>
            <p className='max-w-2xl text-center text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequatur hic officia eum fugit sequi tempora est suscipit accusamus, unde quod rem impedit atque et ratione. Dolore, hic odit. Molestiae.</p>
            <span className='text-5xl text-primary'><RiDoubleQuotesR /></span>
        </div>
        {/* imagenes */}
        <div className='flex flex-col items-center gap-8 justify-center'>
          <div className='flex items-center justify-center gap-8 md:gap-12'>
        <img className='w-8 h-8 md:w-14 md:h-14 object-cover rounded-full ' src="https://img.freepik.com/free-photo/selfie-portrait-videocall_23-2149186124.jpg" alt="" />

        <img className='w-10 h-10 md:w-16 md:h-16 object-cover rounded-full ' src="https://img.freepik.com/free-photo/portrait-handsome-corporate-man_23-2148336854.jpg" alt="" />

        <img className='w-12 h-12 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-primary p-1 bg-white' src="https://img.freepik.com/free-photo/portrait-young-woman-looking-camera_23-2148148118.jpg" alt="" />

        <img className='w-10 h-10 md:w-16 md:h-16 object-cover rounded-full ' src="https://img.freepik.com/free-photo/portrait-woman_23-2147626503.jpg" alt="" />

        <img className='w-8 h-8 md:w-14 md:h-14 object-cover rounded-full ' src="https://img.freepik.com/free-photo/front-view-smiley-man-seaside_23-2149737022.jpg" alt="" />
        </div>
        <div className=''>
          <h3 className='text-center text-[24px] font-bold'>Flor Regalado</h3>
          <h5 className='text-center text-[20px] text-gray-500'>Foundover of Varibo</h5>
        </div>
        </div>
    </div>
  )
}

export default Reviews