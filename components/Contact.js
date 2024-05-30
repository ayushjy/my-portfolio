import React from 'react'
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";

const Contact = () => {
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

  return (
    <div className='px-56 py-36 flex flex-col max-lg:px-20 max-md:px-8 max-2xl:px-48'>
        <div className='pb-24 max-xl:hidden'>
                <div className='text-9xl font4 text-black text-center text_transparent lg:'>&lt;Contact /&gt;</div>
                <div className='text-9xl font5 text-white text-center -my-16  max-xl:text-8xl'>👋 Say Hello</div>
            </div>
            <div className='w-11/12 flex flex-col justify-center pt-8 max-lg:'>
                <div className='text-xl font4 pb-3 text-green-400'>📞 Get in Touch</div>               
                <div className='text-gray-400 text-2xl font1 pb-2 max-lg:text-lg max-md:text-base'>Sweet, that's it from my side! Now it's your turn to say hi.</div>
                <div className='text-gray-400 text-2xl font1 pb-3 max-lg:text-lg max-md:text-base'>I'm available for freelance projects. Let's work together to create something worth sharing.</div>
            </div> 
            <div className='pt-4 flex gap-2  max-sm:flex-wrap'>
            <button onClick={handleWhatsappClick}  className=' border-2 border-green-400 text-green-400 hover:bg-gray-700 hover:text-white hover:border-gray-700 px-4 py-3 text-xs rounded-lg font3 flex justify-center items-center max-sm:w-36'><span className='pr-2'><FaWhatsapp size={20}/></span>WHATSAPP</button>
           <Link target='blank' href={"https://www.linkedin.com/in/ayush-jyoti-4a3829230/"}><button className=' border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white hover:border-blue-400 px-4 py-3 text-xs rounded-lg font3 flex justify-center items-center max-sm:w-36'><span className='pr-2'><FaLinkedinIn size={20}/></span>LINKEDIN</button></Link> 
            <button onClick={handleMailClick}  className=' border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white hover:border-yellow-400 px-4 py-3 text-xs rounded-lg font3 flex justify-center items-center max-sm:w-36'><span className='pr-2'><TbMailFilled size={20}/></span>MAIL</button>
            </div>
    </div>
  )
}

export default Contact
