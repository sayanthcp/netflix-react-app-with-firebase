import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-2 absolute w-full z-[100]'>
        <h1 className='text-red-600 text-3xl font-bold cursor-pointer'>NETFLIX</h1>
        <div>
            <button className='text-white pr-4 cursor-pointer'>Sign In</button>
            <button className='bg-red-600 px-6 py-2 text-white rounded-md cursor-pointer'>Sign Up</button>
        </div>
      
    </div>
  )
}

export default Navbar
