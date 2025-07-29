import React from 'react'

//icons
import { RiMailFill, RiSmartphoneFill, RiMacFill, RiClipboardFill, RiComputerFill, RiCollageFill } from 'react-icons/ri'

const Services = () => {
  return (
    //email form
    <div className='grid grid-cols-1 md:grid-cols-2 p-8 md:p-12 gap-8 md:gap-20 xl:p-20'>
        <div className='flex flex-col gap-4'>
            <h1 className='text-[40px] font-bold'>How We Can Help You</h1>
            <p className='text-[20px] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dicta, quibusdam pariatur magni perspiciatis veniam!</p>
            <form action="" className='w-full'>
                <div className='relative'>
                    <RiMailFill className='absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl'/>
                    <input type="text" className='w-full bg-gray-100 py-4 pl-8 pr-36 rounded-xl outline-none' placeholder='Enter Your Email Address'/>
                    <button type='submit' className='absolute font-semibold py-2 px-6 bg-primary text-white rounded-xl right-2 top-1/2 -translate-y-1/2'>Suscribe</button>
                </div>
            </form>
        </div>
        {/* servicios */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='flex flex-col gap-2'>
                <RiClipboardFill className='text-4xl p-2 bg-secondary text-primary box-content rounded-xl'/>
                <h3 className='text-[20px] font-bold'>UI/UX Desing</h3>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, tempora.</p>
            </div>

            <div className='flex flex-col gap-2'>
                <RiCollageFill className='text-4xl p-2 bg-secondary text-primary box-content rounded-xl'/>
                <h3 className='text-[20px] font-bold'>Logo Branding</h3>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, tempora.</p>
            </div>

            <div className='flex flex-col gap-2'>
                <RiSmartphoneFill className='text-4xl p-2 bg-secondary text-primary box-content rounded-xl'/>
                <h3 className='text-[20px] font-bold'>App Desing</h3>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, tempora.</p>
            </div>

            <div className='flex flex-col gap-2'>
                <RiComputerFill className='text-4xl p-2 bg-secondary text-primary box-content rounded-xl'/>
                <h3 className='text-[20px] font-bold'>Website Desing</h3>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, tempora.</p>
            </div>
        </div>
    </div>
  )
}

export default Services