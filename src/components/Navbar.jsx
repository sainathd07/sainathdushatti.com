import React from 'react'

const Navbar = () => {
  return (
    <div>
        <ul className='mb-[30px] font-body font-medium text-[25px] text-[#4A4A4A] lg:flex-row lg:justify-between lg:items-center hidden lg:flex'>
            <li>
              <a href='/home'>Home</a>
            </li>
            <li>
              <a href='/resume'>Resume</a>
            </li>
            <li>
              <a href='/blog'>Blog</a>
            </li>
            <li>
              <a href='/projects'>Projects</a>
            </li>
            <li>
              <a href='/books'>Books</a>
            </li>
            <li>
              <a href='/papershelf'>Papershelf</a>
            </li>
            
        </ul>
    </div>
  )
}

export default Navbar