import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 md:p-8 z-[100] w-full absolute'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer transform transition duration-200 hover:scale-125'>NETFLIX</h1>
        <div>
            <button className='text-white pr-4 transition duration-200 hover:text-red-300 focus:text-red-400'>Sign In</button>
            <button className='bg-red-600 px-4 py-2 rounded cursor-pointer transition duration-200 hover:bg-red-700 focus:bg-red-800 text-white'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar