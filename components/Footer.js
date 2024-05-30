import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className=' flex justify-between items-center px-36 max-md:px-24 max-sm:px-16 py-12 max-sm:flex-col max-sm:gap-4'>
     
      <div className='flex max-sm:flex-col max-sm:items-center'>
      <Image src={"/assets/logo1.png"} width={65} height={120} ></Image>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className='text-4xl font-extralight text-white max-sm:hidden'>|</div>
      &nbsp;&nbsp;&nbsp;
       <div className='flex items-center text-sm text-gray-400 font4 max-md:flex-col max-md:items-start max-sm:block'><span className='text-sm font1'>&copy; 2024 &#8212; </span>@ayushjyoti0321</div>
    </div>


      <div className='text-gray-400 text-base  font4'>Made with ❤️ by Ayush Jyoti</div>
    </div>
  )
}

export default Footer
