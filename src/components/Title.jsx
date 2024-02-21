import React from 'react'
import { FaBars } from "react-icons/fa";

const Title = () => {
  return (
    <div className=' my-[30px] flex flex-row justify-between items-center'>
    <div className='font-body font-bold md:text-[40px] text-[25px]'>Sainath Dushatti</div> {/* My Name */}
    <FaBars className='text-[25px] md:text-[40px] lg:invisible' /> {/* Hamburger Menu */}
    </div>
  )
}

export default Title