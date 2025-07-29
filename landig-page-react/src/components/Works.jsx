import React from 'react'

const Works = () => {
  return (
    <div className='p-8 xl:p-20'>
        <div className='mb-8'>
            <h1 className='text-[40px] font-black'>We create world-class digital products</h1>
            <p className='text-xl text-gray-500'>By information about desing the world to the best instructors, heatc helping By information</p>
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
            {/* imagenes de ejemplos */}
            <div className='flex flex-col gap-2'>
            <img className='w-full h-[600px] object-cover rounded-3xl' src="work1.png" alt="" />
            <p className='text-gray-500'>App Desing - June 20, 2022</p>
            <h3 className='text-2xl font-bold'>App Redesing</h3>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto dolor vel itaque perferendis similique.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='flex flex-col gap-4'>
                <img className='w-full h-56 object-cover rounded-3xl' src="work2.png" alt="" />
                <p className='text-gray-500'>App Desing - June 20, 2022</p>
                <h3 className='text-2xl font-bold'>Redesing channel website landing page</h3>
              </div>
              <div className='flex flex-col gap-4'>
                <img className='w-full h-56 object-cover rounded-3xl' src="work3.png" alt="" />
                <p className='text-gray-500'>App Desing - June 20, 2022</p>
                <h3 className='text-2xl font-bold'>New Locator App for a New Company</h3>
              </div>
              <div className='flex flex-col gap-4'>
                <img className='w-full h-56 object-cover rounded-3xl' src="work4.png" alt="" />
                <p className='text-gray-500'>App Desing - June 20, 2022</p>
                <h3 className='text-2xl font-bold'>Rental Rooms Web App Plataform</h3>
              </div>
              <div className='flex flex-col gap-4'>
                <img className='w-full h-56 object-cover rounded-3xl' src="work5.png" alt="" />
                <p className='text-gray-500'>App Desing - June 20, 2022</p>
                <h3 className='text-2xl font-bold'>Calendar App for Big SASS Company</h3>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Works