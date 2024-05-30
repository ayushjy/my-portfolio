import React from 'react'
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
const Sideicons = ({isSideiconpresent}) => {
  const handleMailClick = () => {
    const email = 'ayushjyoti0321@gmail.com'; 
    const subject = 'Hello from My Website';
    const body = 'I would like to connect with you.';

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  return (
    <>
    {isSideiconpresent &&(
    <div className='flex flex-col fixed bottom-0 right-0 gap-3 pr-12 max-lg:pr-6 max-md:pr-4 pb-12'>
       <Link target='blank' href={"https://github.com/ayushjy"}> <div className='text-white hover:text-green-400 cursor-pointer hover:-translate-y-2 transition ease-out hover:animate-bounce max-sm:text-[10px]'><FaGithub size={30} /></div></Link>
       <Link target='blank' href={"https://twitter.com/ayu16j"}> <div className='text-white hover:text-blue-400 cursor-pointer hover:-translate-y-2 transition ease-out hover:animate-bounce'><FaTwitter size={30}  /></div></Link>
       <Link target='blank' href={"https://www.linkedin.com/in/ayush-jyoti-4a3829230/"}> <div className='text-white hover:text-yellow-400 cursor-pointer hover:-translate-y-2 transition ease-out hover:animate-bounce'><FaLinkedinIn size={30}  /></div></Link>
       <div onClick={handleMailClick} className='text-white hover:text-pink-400 cursor-pointer hover:-translate-y-2 transition ease-out hover:animate-bounce'><TbMailFilled size={30}  /></div>
       <div className='text-white hover:text-green-400 h-[112px] flex justify-center items-center'>
          <div className='h-full w-[0.5px] bg-white'></div>
        </div>
      </div>
      )}
    </>
  )
}

export default Sideicons
