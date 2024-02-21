import React from 'react'

const Navbar = () => {
  return (
    <div>
        <ul className='font-body font-medium text-[25px] text-[#4A4A4A] lg:flex-row lg:justify-between lg:items-center hidden lg:flex'>
            <li>Home</li>
            <li>Resume</li>
            <li>Blog</li>
            <li>Projects</li>
            <li>Books</li>
            <li>Papershelf</li>
        </ul>
    </div>
  )
}

export default Navbar