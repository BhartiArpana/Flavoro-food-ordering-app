import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between pt-2.5 pr-4 mb-12' >
        <div className='pl-5'>
            <h3 className='font-semibold text-xl text-gray-600'>{(new Date()).toUTCString().slice(0,16)}</h3>
            <h1 className='text-2xl font-bold'>Flavoro Foods</h1>
        </div>
       <div>
        <input type="search" placeholder='Search' autoComplete='off' className='border p-2.5 w-full lg:w-[25vw] rounded-lg border-gray-400 outline-none'/>
       </div>
    </div>
  )
}

export default Navbar