import React from 'react'
//icons
import { RiCheckboxBlankCircleFill, RiPlayFill, RiStarFill, RiCheckboxBlankFill } from 'react-icons/ri'

const Hero = () => {
  return (
    <section className='min-h-[90vh] grid grid-cols-1 xl:grid-cols-8'>
      {/* seccion de informacion */}
        <div className='md:col-span-5 flex items-center justify-center p-8 xl:p-16'>
          <div className='flex flex-col gap-8'>
            <h1 className='text-5xl xl:text-7xl font-bold leading-[5rem] xl:leading-[7.5rem]'>
              We Desing Impactful Digital{" "}
              <span className='text-primary py-2 px-6 border-8 border-primary relative inline-block'> 
                Products 
                <RiCheckboxBlankCircleFill className='text-white text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content'/>
                <RiCheckboxBlankCircleFill className='text-white text-base absolute -right-5 -top-5 p-2 bg-primary rounded-full box-content'/>
                <RiCheckboxBlankCircleFill className='text-white text-base absolute -right-5 -bottom-5 p-2 bg-primary rounded-full box-content'/>
                <RiCheckboxBlankCircleFill className='text-white text-base absolute -left-5 -bottom-5 p-2 bg-primary rounded-full box-content'/>
                </span>
                </h1>
            <p className='text-gray-500 text-2xl leading-[2.5rem]'>Help find solutions with intuitive and in accordance with client business goals. We provide a high-quality services.</p>
            {/* boton */}
            
              <div className='flex flex-col md:flex-row items-center gap-4'>
                <button className='w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl'>Contact Us</button>
                <button className='w-full xl:w-auto flex items-center gap-4  py-2 px-8 rounded-xl text-xl justify-start text-left'>
                  <RiPlayFill className='bg-secondary text-primary p-4 box-content rounded-full'/> Watch Our <br/> Introduction Video
                </button>
              </div>
            
          </div>
        </div>

        {/* imagen */}
        <div className='md:col-span-3 flex items-center justify-center relative'>
          <div className=''>
          <img className='w-[250px] h-[250px] md:w-[530px] md:h-[530px] object-cover xl:-mt-40' src="hero2.png" alt="" />
          <div className='relative bg-white shadow-xl rounded-lg p-4 flex flex-col gap-2 justify-center max-w-[250px] mx-auto -mt-12'>
            
            <div className='flex items-center'>
            <img className='w-10 h-10 object-cover rounded-full ring-2 ring-gray-300' src="https://img.freepik.com/free-photo/portrait-woman_23-2147626503.jpg" alt="" />

            <img className='w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-3' src="https://img.freepik.com/free-photo/portrait-young-woman-looking-camera_23-2148148118.jpg?" alt="" />

            <img className='w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-3' src="https://img.freepik.com/free-photo/selfie-portrait-videocall_23-2149186124.jpg" alt="" />

            <img className='w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-3' src="https://img.freepik.com/free-photo/portrait-handsome-corporate-man_23-2148336854.jpg" alt="" />

            <img className='w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-3' src="https://img.freepik.com/free-photo/close-up-portrait-handsome-young-hipster-man-hazel-eyes-wearing-trendy-plaid-shirt-posing-near-city-cafe_291049-1499.jpg" alt="" />
            </div>
              <h2 className='text-xl font-bold tracking-[1px] text-gray-800'>120 + Employees</h2>
              <div className='flex items-center gap-2 text-lg text-gray-500'>
                <RiStarFill className='text-primary'/>5.0 (3.1k Reviews)
              </div>
              <div className='absolute -right-12 -bottom-12 -z-10'>
                <div className='relative'>
                <RiCheckboxBlankCircleFill className='text-primary text-8xl'/>
                <div className='bg-white text-8xl absolute left-0 top-0 w-14 h-14'></div>
                </div>
              </div>
             </div>
             </div>
              {/* circulo de fondo de imagen */}
             <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[280px] h-[280px] md:w-[450px] md:h-[400px] bg-secondary border-[10px] border-primary rounded-full -z-10'>
             </div>

             {/* logos de figma */}
             <img className='w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-figma absolute top-[12%] right-[20%] xl:right-[8%] -rotate-12' src="https://s3-alpha.figma.com/hub/file/2714591175/e1906d9b-540d-4ebd-b432-a8cf00472848-cover.png" alt="" />

            {/* logos de adobe */}
             <img className='w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-adobe absolute top-[10%] xl:top-[2%] left-[20%] xl:left-[10%] rotate-12' src="https://th.bing.com/th/id/R.24429bdef96dc6d6a53e161d6b9f6134?rik=EhEszdfb2Q5AmQ&pid=ImgRaw&r=0" alt="" />

            {/* logos de skecth  */}
             <img className='w-10 h-10 md:w-20 md:h-20 object-cover rounded-full absolute bottom-[5%] left-[10%] xl:left-[3%] -rotate-12' src="https://www.pngkit.com/png/full/870-8707206_photoshop-pixlr-platforms-sketch-app-logo-png.png" alt="" />
        </div>
    </section>
  )
}

export default Hero