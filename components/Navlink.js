import React from 'react'
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
const Navlink = ({isopen,setIsopen}) => {
                
  const handleWhatsappClick = () => {
    const phoneNumber = '9608891616'; 
    const message = 'Hello from My Website!'; 

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  const handleMailClick = () => {
    const email = 'ayushjyoti0321@gmail.com'; 
    const subject = 'Hello from My Website';
    const body = 'I would like to connect with you.';

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

          const offMenubar = ()=>{
            setIsopen(!isopen);
          }


  return (
      <div className='w-full h-screen -mt-24 flex items-center max-lg:flex-col max-lg:justify-center max-lg:gap-32  z-50'>
              <div className='w-1/2 flex flex-col items-center  gap-12 '>
                <Link href={"/work"}><div className='text-7xl text-white  font6 max-lg:text-5xl' onClick={offMenubar}>Work</div></Link>
                <Link href={"/about"}><div className='text-7xl text-white  font6 max-lg:text-5xl' onClick={offMenubar} >About</div></Link>
                <Link href={"/contact"}><div className='text-7xl text-white  font6 max-lg:text-5xl' onClick={offMenubar}>Contact</div></Link>
              </div>
              <div className='lg:w-1/2 flex flex-col items-center justify-center gap-7'>
                <div className='text-2xl font4 text-white'>Social Links</div>
                <div className='flex gap-7 items-center'>
                  <div onClick={handleWhatsappClick} className='text-white cursor-pointer hover:text-yellow-400'><FaWhatsapp size={25}/></div>
                  <Link target='blank' href={"https://www.linkedin.com/in/ayush-jyoti-4a3829230/"}><div className='text-white cursor-pointer hover:text-blue-400'><FaLinkedinIn size={25}/></div></Link>
                  <Link target='blank' href={"https://github.com/ayushjy"}><div className='text-white cursor-pointer hover:text-green-400'><FaGithub size={25}/></div></Link>
                  <div onClick={handleMailClick} className='text-white cursor-pointer hover:text-pink-400'><TbMailFilled size={25}/></div>
                </div>
              </div>
          </div>
  )
}

export default Navlink
